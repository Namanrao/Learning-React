import styles from "./TodoDisplayHeading.module.css";
function TodoDisplayHeading() {
  return (
    <>
      <div className={`${styles["heading-container"]} container text-center`}>
        <div className="row">
          <div className="col-6">Description</div>
          <div className="col-4">Date</div>
          <div className="col-2">Action</div>
        </div>
      </div>
    </>
  );
}

export default TodoDisplayHeading;
