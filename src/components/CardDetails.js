import arrows from '../asserts/chevron-small.svg'

function CardDetails({ item }) {
  return (
     <div className="card" style={{
        width: 350,
        height: 450,
        border: "none",
        // backgroundColor: "#0d1117",
        color: "rgba(255, 255, 255, 0.5)",
      }}>
        <div className="card-body">
            <h5 className="card-title aa">{item.bodyType}</h5>
            <p className="card-text ba">{item.modelName}<span className="bb">{item.modelType}</span></p>
        <img src={item.imageUrl} className="card-img-top" alt={item.id} />

        <div className="d-flex m-4">
        <a href={item.id} className='d-flex px-4 ax'>
        <h5 className="card-title px-2 ca">Learn</h5>
        <img width={20} height={25} src={arrows} alt="arrow" />
        </a>
        <a href={item.id} className='d-flex ax'>
        <h5 className="card-title px-2 ca">shop</h5>
        <img width={20} height={25} src={arrows} alt="arrow" />
        </a>
        </div>
    </div>
    </div>
  );
}

export default CardDetails;
