import * as React from "react";
import InttoFB from "/src/assets/InttoFB_qrc.png";
import InttoIG from "/src/assets/InttoIG_qrc.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// Import your background image
import ucBuildingBackground from "/src/assets/uc_building.png";

const Contents = () => {
  const { id } = useParams();
  const [data, setData] = useState("");

  useEffect(() => {
    if (id !== undefined) {
      axios.get(`http://localhost:3000/verifications/${id}`).then((res) => {
        const dateTimeString = res.data.dateOfEvent;
        const date = new Date(dateTimeString);

        const options = {
          year: "numeric",
          month: "long",
          day: "numeric",
        };

        const humanReadableFormat = date.toLocaleString("en-US", options);
        res.data.dateOfEvent = humanReadableFormat;
        setData(res.data);
      });
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100 bg-cover">
      {/* Background Image Applied to Full Width */}
      <div
        style={{
          backgroundImage: `url(${ucBuildingBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
         
        }}
      >
        <div className="flex flex-col items-center justify-center w-full min-h-full h-full">
          <div className="flex items-center place-content-center shadow-md text-black w-full min-h-auto h-auto pt-2 pb-2 px-80">
            <img
              className="h-[45px] w-auto object-contain md:h-[80px] sm:h-[60px]"
              src="/src/assets/uc_logo.png"
              alt="Uc Logo"
            />
            <div className="ml-5 mr-8 text-left">
              <label className="block text-[12px] sm:text-[18px] lg:text-[20px] uppercase leading-[0.8] font-bold tracking-wider">
                &nbsp;University of the Cordilleras
              </label>
              <label className="block text-[10px] sm:text-[15px] lg:text-[16px] leading-[0.8] pt-2">
                &nbsp; Innovation and Technology Transfer Office
              </label>
            </div>
            <img
              className="h-[45px] w-auto object-contain md:h-[50px] sm:h-[30px]"
              src="/src/assets/intto_logo.png"
              alt="Intto Logo"
            />
          </div>
          <div className="flex justify-center p-2">
            <div className="flex flex-col items-center self-center px-16 pt-7 pb-11 mt-6 shadow-inner-custom rounded-3xl border-2 border-white border-solid shadow-sm backdrop-blur-2xl bg-black bg-opacity-15">
              <div className="flex flex-col items-center max-w-[1280px] w-full">
                <div className="justify-center px-16 py-8 text-4xl font-bold text-center shadow-inner-custom text-white rounded-xl max-md:pr-7 max-md:pl-5 max-md:max-w-full"
                style={{ backgroundColor: '#173518'}}>
                  CERTIFICATE VERIFICATION
                </div>
                <div className="flex gap-12 mt-10 max-w-full font-medium w-[468px] max-md:flex-wrap max-md:mt-10">
                  <div className="my-auto text-xl text-center shadow-inner-custom text-white">Event</div>
                  <div className="grow items-start px-3.5 rounded-full py-3 text-m bg-white/70  w-[400px] text-left max-md:pr-5">
                  <input
                    className="flex-grow bg-transparent m-1 border-none w-full"
                    id="input1"
                    type="text"
                    placeholder="Name of the Event"
                    value={data ? data.eventTitle : ""}/>
                  </div>
                </div>
                <div className="flex gap-10 mt-3 max-w-full  font-medium w-[468px] max-md:flex-wrap">
                  <div className="my-auto text-xl text-center text-white">Name</div>
                  <div className="grow items-start px-3.5 py-3 text-m rounded-full bg-white/70 text-black text-opacity-90 w-[00px] text-left max-md:pr-5">
                  <input
                    className="flex-grow bg-transparent m-1 w-full border-none"
                    id="input2"
                    type="text"
                    placeholder="Name of the Participant"   
                    value={data ? data.fullName : ""}/>
                  </div>
                </div>
                <div className="flex gap-14 mt-3 max-w-full font-medium w-[468px] max-md:flex-wrap">
                  <div className="my-auto text-xl text-center text-white">Date</div>
                  <div className="grow items-start px-3.5 py-3 text-m rounded-full  bg-white/70 text-black text-opacity-90 w-[400px] text-left max-md:pr-5">
                  <input
                    className="flex-grow bg-transparent m-1 w-full border-none"
                    id="input3"
                    type="text"
                    placeholder="Date of the Event"   
                    value={data ? data.dateOfEvent : ""}/>
                  </div>
                </div>
                <div className="flex gap-5 mt-3 max-w-full font-medium w-[468px] max-md:flex-wrap"> 
                  <div className="my-auto text-xl text-center text-white">Location</div>
                  <div className="grow items-start px-3.5 py-3 text-m rounded-full shadow-inner-custom bg-white/70 text-black text-opacity-90 w-[400px] text-left max-md:pr-5">
                  <input
                    className="flex-grow bg-transparent m-1 w-full border-none"
                    id="input4"
                    type="text"
                    placeholder="Venue of the Event" 
                    value={data ? data.eventLocation : ""}/>
                  </div>
                </div>
                <div className="self-stretch mt-9 text-base text-center text-white max-md:max-w-full">
                  This is to certify that the individual mentioned above has
                  participated in the event and has confirmed their legitimate
                  presence and active involvement. This certificate serves as an
                  official verification of the individual's attendance at the event.
                </div>
                <div className="mt-9 max-w-full w-[421px]">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[65%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        src={InttoFB}
                        className="grow shrink-0 max-w-full aspect-[1.06] w-[141px] max-md:mt-10"
                        alt="Intto Facebook"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        src={InttoIG}
                        className="grow shrink-0 max-w-full aspect-[1.06] w-[141px] max-md:mt-10"
                        alt="Intto Instagram"
                      />
                    </div>
                  </div>
                </div>
                {data.certificate && (
                  <div className="lg:mt-5">
                    <a
                      href={data.certificate}
                      download
                      className="text-[9px] sm:text-[9px] lg:text-[15px] mt-4 mb-4 sm:mt-5 bg-white text-[#013200] font-bold py-2 sm:py-3 px-4 rounded-lg cursor-pointer transition duration-300 border border-white-lg hover:text-white hover:bg-[#013200]"
                    >
                      Download Certificate
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;