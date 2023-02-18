import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Items from "../data/data.json";

type StoreItemsProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }) {
  return (
    <Card style={{}}>
      <Card.Img
        variant="top"
        src="https://images.pexels.com/photos/2836945/pexels-photo-2836945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        style={{
          objectFit: "cover",
        }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between  align-items-center">
          <span className="fs-1  ">name</span>
          <span className="fs-5 text-muted">33$</span>
        </Card.Title>

        <div className="">
          {7 > 0 ? (
            <Button className="w-100">Add</Button>
          ) : (
            <div className="text-center">
              <div className="my-3 d-flex justify-content-center  align-items-center">
                <Button className="me-3"> -</Button>
                <span className="fs-4 me-2"> 3</span>
                <span>in cart</span>
                <Button className="ms-3"> +</Button>
              </div>

              <div>
                <Button variant="danger" className=" border-0">
                  Remove
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
