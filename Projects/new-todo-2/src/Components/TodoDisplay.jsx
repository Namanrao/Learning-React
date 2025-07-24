import RemoveButton from "./RemoveButton";
import Calendar from "./Calendar";
function TodoDisplay({first}) {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-6">{first}</div>
          <div className="col-4"><Calendar></Calendar></div>
          <div className="col-2">
            <RemoveButton></RemoveButton>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoDisplay;
