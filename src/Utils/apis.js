
const options = {
    method: 'GET',
    params: {
      maxResults: "50",
    },
    headers: {
      "X-RapidAPI-Key": "7b27586d15mshd4fa79bdf745796p1bf483jsn17ef6adc2a28",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
export  const fetchingdata = async (url) => {
  try {
    const res = await fetch(`https://youtube-v31.p.rapidapi.com/${url}`,options)
    const data = await res.json();
    // console.log("apis file",data)
   return data
  } catch (error) {
    console.log(error)
  }
  };
  // e741d2ad9emsh22be462981f28c8p1d773bjsn33e7d25abeee
  // 5102dded2bmshb91b75b85d8387cp1b8304jsnea8a52b0019b

  //baskar2   7b27586d15mshd4fa79bdf745796p1bf483jsn17ef6adc2a28

  export const value_converter =(value)=>{
    if(value >= 1000000){
     return Math.floor(value/1000000)+"M"
    }
    else if (value >= 1000){
     return  Math.floor(value/1000)+"K"
    }
    else {
     return value
    }
 }