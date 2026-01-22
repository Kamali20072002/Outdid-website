import React from 'react';

const Career = ({ careerRef, careerFormData, handleCareerChange, handleCareerSubmit, careerSuccess }) => {
  return (
    <section ref={careerRef} className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20 reveal-up">
            <span className="text-outdid-blue/40 font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">Join the Mission</span>
            <h2 className="text-5xl md:text-7xl font-black text-outdid-blue mb-8 uppercase tracking-tighter">Career <br />Opportunities.</h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              We are looking for brilliant minds to help us build the next generation of industrial technology.
            </p>
          </div>

          <form onSubmit={handleCareerSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-12 rounded-[3rem] shadow-xl reveal-up">
            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 block">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={careerFormData.name}
                  onChange={handleCareerChange}
                  required
                  placeholder="John Doe" 
                  className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-outdid-amber transition-all" 
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 block">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={careerFormData.email}
                  onChange={handleCareerChange}
                  required
                  placeholder="john@outdid.com" 
                  className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-outdid-amber transition-all" 
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 block">Position</label>
                <select 
                  name="position"
                  value={careerFormData.position}
                  onChange={handleCareerChange}
                  className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-outdid-amber transition-all font-medium"
                >
                  <option>Embedded Engineer</option>
                  <option>PCB Designer</option>
                  <option>Firmware Developer</option>
                  <option>Mechanical Engineer</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 block">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={careerFormData.phone}
                  onChange={handleCareerChange}
                  required
                  placeholder="+91 ..." 
                  className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-outdid-amber transition-all" 
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 block">Additional Comments</label>
                <textarea 
                  name="comments"
                  value={careerFormData.comments}
                  onChange={handleCareerChange}
                  rows="4" 
                  placeholder="Tell us about your expertise..." 
                  className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-outdid-amber transition-all resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full py-5 bg-outdid-blue text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-outdid-amber hover:text-outdid-blue transition-all">
                  Submit Application
                </button>
                {careerSuccess && (
                  <p className="mt-4 text-center text-green-600 font-bold text-[10px] uppercase tracking-widest">Application sent successfully!</p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Career;
