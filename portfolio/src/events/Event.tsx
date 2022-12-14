const Event: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e);
  };

  return <div>
    <input onChange={onChange} />
    <div draggable onDragStart={onDragStart}>
      Drag Me!
    </div>
  </div>
};

export default Event;
