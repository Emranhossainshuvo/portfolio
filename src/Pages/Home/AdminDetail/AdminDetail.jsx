import moment from 'moment';
import DetailText from '../../DetailText/DetailText';
const AdminDetail = () => {
  return (
    <>
    <DetailText></DetailText>
      <div className="md:flex md:justify-between md:mt-24 md:max-w-screen-2xl mx-auto">
        <div className="mr-1 ps-2 pe-2 mb-5">
            <p className="text-black font-thin">ROLE/SERVICES</p>
            <hr className="my-6" />
            <h4 className=" text-black font-medium">Full stack development</h4>
        </div>
        <div className="mr-1 ps-2 pe-2 mb-5">
            <p className="text-black font-thin">HOBBIES</p>
            <hr className="my-6" />
            <h4 className=" text-black font-medium">Coding & Travelling</h4>
        </div>
        <div className="mr-1 ps-2 pe-2 mb-5">
            <p className="text-black font-thin">Location & Year</p>
            <hr className="my-6" />
            <h4 className=" text-black font-medium">Bangladesh &copy;  {moment().format('YYYY') }</h4>
        </div>
      </div>
    </>
  );
};

export default AdminDetail;
