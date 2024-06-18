const Title = ({ title }) => {
  return (
    <div className="mb-8">
      
      
    
      {/* <hr className="mx-auto border-2 border-[#4D83DE] w-[40%]"/> */}
      <h3 className="text-3xl my-4 font-bold uppercase text-center">{title}</h3>
      {/* <hr className="mx-auto border-2 border-[#4D83DE] w-1/2"/> */}
      <div className="flex justify-center mx-auto">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>
    </div>
  );
};

export default Title;
