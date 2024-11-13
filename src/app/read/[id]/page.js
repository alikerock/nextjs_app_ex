export default async function Read(props) {
  const response = await fetch(`http://localhost:9999/topics/${props.params.id}`);
  const topic = await response.json(); //json->object

  return (
    <div>
      <h2>{topic.title}</h2>
      {/* <p>parameter: {props.params.id}</p> */}
      <p>{topic.body}</p>
    </div>
  );
}
