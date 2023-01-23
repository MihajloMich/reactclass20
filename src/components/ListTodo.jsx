const ListTodo = (props) => {
  const { todos } = props;

  const style = {
    border: "1px solid black",
    borderCollapse: "collapse",
    padding: "5px",
  };
  return (
    <div>
      <table style={style}>
        <thead>
          <tbody>
            <tr>
              <td>User ID</td>
              <td>ID</td>
              <td>Tittle</td>
              <td>Completed</td>
              <td>Delete</td>
              <td>Compled</td>
            </tr>
          </tbody>
        </thead>
      </table>
    </div>
  );
};

export default ListTodo;
