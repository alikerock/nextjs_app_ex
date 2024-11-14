export default async function Read(props) {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL+`topics/${props.params.id}`);
  const topic = await response.json(); //json->object

  return (
    <div>
      <h2>{topic.title}</h2>
      {/* <p>parameter: {props.params.id}</p> */}
      <p>{topic.body}</p>
    </div>
  );
}
