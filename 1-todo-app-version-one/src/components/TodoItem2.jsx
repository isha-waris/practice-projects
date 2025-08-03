export default function TodoItem2() {
  let todoName = 'Go to College';
  let date = '4/10/23'
  return (
    <div>
      <div className="container ">
        <div className="row kg-row">
          <div className="col-6">
            {todoName}
          </div>
          <div className="col-4">
            {date}
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-danger  kg-button">Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}
