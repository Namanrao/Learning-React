function Time() {
  let time = new Date();

  return (
    <p>
      This is the current time : {time.getDate()}/{time.getMonth()}/
      {time.getFullYear()} - {time.getHours()}:{time.getMinutes()}:
      {time.getSeconds()}
    </p>
  );
}

export default Time;
