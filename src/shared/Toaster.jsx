import toast from 'react-hot-toast';


    const Toaster = ( type = "success",message) =>
    toast[type](message, {
      duration: 2000,
      position: "top-right",
      style: { borderRadius: "8px", minWidth: "250px" },
      className: "font-medium",
    })
  


export default Toaster