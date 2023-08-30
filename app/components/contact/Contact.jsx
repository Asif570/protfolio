"use client";
import { useRef,} from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef()

  const submit = (e)=>{
    e.preventDefault();
    emailjs.sendForm('service_k6r1q75', 'template_a43q95s', form.current, 'jHVRry457KICxGr-I')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
   e.target.reset()
  }
  return (
    <div className="bg-[#E5E5E5]">
      <div className="container mx-auto px-5 py-20">
        <div className="flex items-center flex-col gap-4">
          <div className="text-3xl font-bold text-[#F44336] mb-5capitalize">
            Contact me.
          </div>
          <form onSubmit={submit} ref={form} className="w-full max-w-[600px] border-2 border-[#161B58] rounded-md px-3 py-8 flex flex-col gap-5">
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="user_name" className="text-black ">
                Name
              </label>
              <input
            
                type="text"
               
                name="user_name"
               
                placeholder="Jon Dew"
                className="text-black  px-2 h-10 rounded-xl outline-none focus:border  border-[#8c8ead] bg-[#8c8ead4a]"
              />
            </div> 
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="user_email" className="text-black ">
                Email
              </label>
              <input
            
                type="email"
               
                name="user_email"
                required
                placeholder="email@example.com"
                className="text-black  px-2 h-10 rounded-xl outline-none focus:border  border-[#8c8ead] bg-[#8c8ead4a]"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="message" className="text-black ">
                Message
              </label>
              <textarea
          
                name="message"
              
                placeholder="Hi, Asem..."
                id="message"
                className="text-black p-2 w-full min-h-[80px] rounded-xl outline-none focus:border  border-[#8c8ead] bg-[#8c8ead4a]"
              ></textarea>
            </div>
            <div className="w-full flex justify-end mt-5">
              <button type="submit" className="mr-8">
                <FaPaperPlane size={30} fill="#0A3579" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
