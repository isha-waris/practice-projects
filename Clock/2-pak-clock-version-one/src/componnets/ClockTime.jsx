let ClockTime = () => {
  let time = new Date();
  return <p className="lead">Current time is : {time.toLocaleDateString()} - {time.toLocaleTimeString()} </p>
}
export default ClockTime;