function Hello() {
  let myName = "Naman";
  let fullName = () => {
    return "Naman Rao";
  };
  return <h3>Hello this is the future speaking. My name is {fullName()}</h3>;
}

export default Hello;
