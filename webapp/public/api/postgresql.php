<?php
class Postgresql {
    private $transaction = FALSE;
    private $conn;

    function __construct($authorized_username) {
        $this->conn = pg_connect('host=' . $_ENV['DB_HOST'] . ' dbname=' . $_ENV['DATABASE'] . ' user=' . $_ENV['DB_USERNAME'] . ' password=' . $_ENV['DB_PASSWORD']);
        // $this->conn = pg_connect('host=wisdom-dev-db-server.postgres.database.azure.com dbname=wisdom user=wisdom_user password=Welcome@123');
        if ($this->conn === FALSE) {
            throw new Exception('Unable to connect to database.');
        }
        $result = pg_query($this->conn, 'SET ROLE ' . $authorized_username);
        if ($result === FALSE) {
            throw new Exception('Cannot find user ' . $authorized_username . ' in database.');
        }
    }

    function check_result($result) {
        if ($result === FALSE) {
            $error = pg_last_error($this->conn);

            if ($this->transaction) {
                pg_query($this->conn, 'ROLLBACK;');
                $this->transaction = FALSE;
            }

            throw new Exception($error);
        }
    }

    function db_insert($schema_name, $table_name, $record = NULL, $entry_on_field = NULL) {
        $columns = array();
        $values = array();
        $prepare = array();
        $count = 0;

        if (is_null($record)) {
            $record = $_POST;
        }

        $related_tables = array();
        if (!is_null($entry_on_field)) {
            $columns[] = $entry_on_field;
            $prepare[] = 'current_timestamp';
        }
        foreach ($record as $field_name => $value) {
            if (is_array($value)) {
                $related_tables[$field_name] = $value;
                continue;
            }

            $columns[] = $field_name;
            if ($value == '') {
                $prepare[] = 'NULL';
            }
            else {
                $values[] = $value;
                $prepare[] = '$' . ++$count;
            }
        }

        $result = $this->db_query_params(
                'INSERT INTO ' . $schema_name . '.' . $table_name .
                ' (' . implode(',', $columns) . ') VALUES (' . implode(',', $prepare) . ') RETURNING id;',
                $values);

        $id = NULL;
        if ($row = pg_fetch_row($result)) {
            $id = $row[0];
            foreach ($related_tables as $related_table_name => $related_records) {
                foreach ($related_records as $related_record) {
                    // A front-end app may set the id (typically with a negative number) in order to identify a row that hasn't been saved yet.
                    if (isset($related_record['id'])) {
                        unset($related_record['id']);
                    }
                    $related_record[$table_name . '_id'] = $id;
                    $this->db_insert($schema_name, $related_table_name, $related_record);    
                }
            }
        }

        return $id;
    }

    function db_update($schema_name, $table_name, $fields = NULL, $entry_on_field = NULL) {
        $values = array();
        $prepare = array();
        $count = 0;

        if (is_null($fields)) {
            $fields = $_POST;
        }

        if (!is_null($entry_on_field)) {
            $prepare[] = $entry_on_field . ' = current_timestamp';
        }
        foreach ($fields as $name=>$value) {
            if ($value == '') {
                $prepare[] = $name . ' = NULL';
            }
            else {
                $values[] = $value;
                $prepare[] = $name . ' = $' . ++$count;
            }
        }
        $values[] = $fields['id'];

        $result = $this->db_query_params('
                UPDATE ' . $schema_name . '.' . $table_name . '
                SET ' . implode(',', $prepare) . '
                WHERE id = $' .  ++$count . ';',
                $values);
    }

    function db_query($query) {
        $result = pg_query($this->conn, $query);
        $this->check_result($result);
        return $result;
    }

    function db_query_params($query, $params) {
        $result = pg_query_params($this->conn, $query, $params);
        $this->check_result($result);
        return $result;
    }

    function is_session_user_in_role($role_name) {
        $result = $this->db_query_params(
                'SELECT dbo.is_session_user_in_role($1);',
                array($role_name));
        if ($row = pg_fetch_row($result)) {
            return $row[0];
        }
        throw new Exception('Unable to determine if user is authorized.');
    }

    function is_current_user_in_role($role_name) {
        $result = $this->db_query_params(
                'SELECT dbo.is_current_user_in_role($1);',
                array($role_name));
        if ($row = pg_fetch_row($result)) {
            return $row[0];
        }
        throw new Exception('Unable to determine if user is authorized.');
    }

    function transaction_begin() {
        $this->db_query('BEGIN;');
        $this->transaction = TRUE;
    }

    function transaction_end() {
        $this->db_query('COMMIT;');
        $this->transaction = FALSE;
    }
}
?>
