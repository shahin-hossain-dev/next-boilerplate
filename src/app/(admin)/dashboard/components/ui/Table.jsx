import { Table as AntTable } from "antd";

const Table = ({ dataSource, columns }) => {
  return (
    <div>
      <AntTable dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Table;
