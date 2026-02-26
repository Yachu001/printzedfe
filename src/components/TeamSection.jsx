import { useEffect, useState } from "react";
import { getTeamMembers } from "../services/baseService";
import TeamCard from "../components/TeamCard";
import coo from "../assets/images/Team/coo.png"

function TeamSection() {

  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      const res = await getTeamMembers();

      const formatted = res.data.map(member => ({
        ...member,
        image: member.image.startsWith("http")
          ? member.image
          : `http://127.0.0.1:8000${member.image}`
      }));

      setMembers(formatted);

    } catch (error) {
      console.error("Team fetch error", error);
    }
  };

  return (
    <section id="team" className="bg-[#1B1C1A] text-white py-16 px-6 lg:px-[11%] xl:px-[15%]">

      {/* COO MESSAGE */}
      <h2 className="text-3xl font-semibold mb-6">
        Our COO’s Message
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 mb-16">

        {/* IMAGE */}
        <img
          src={coo}
          alt="COO"
          className="w-full lg:w-[280px] h-[320px] object-cover"
        />

        {/* TEXT */}
        <div className="text-white space-y-4 text-sm leading-relaxed">
            <p>ex Nunc Vestibulum urna. orci Vestibulum nisl. amet, placerat Quisque 
                odio tincidunt elit elit diam elit nec nulla, leo. id quis tortor. lorem.
                efficitur. ipsum Morbi at, convallis. sodales. amet, id maximus tincidunt
                Cras non. malesuada </p> 

            <p>nisl. lorem. venenatis nisi Lorem dolor Praesent dui. tincidunt non, dolor 
               dolor tincidunt id vitae Morbi quis placerat ultrices porta non, ipsum Praesent 
               non Nam massa scelerisque vitae viverra vel ullamcorper Sed risus placerat eu ex. </p>

            <p>malesuada tempor gravida elit dignissim, non Vestibulum libero, malesuada tincidunt 
                elit. in tincidunt convallis. ipsum nisi est. vehicula, vitae tincidunt ex luctus 
                vel ultrices leo. volutpat risus malesuada sollicitudin. nec in ex vitae </p>

            <p>adipiscing odio eget Nullam Morbi sapien ipsum vitae viverra sodales. viverra 
                porta elit ac nulla, nec enim. scelerisque urna. vehicula, vitae quam nisl. 
                Ut dui quis elit Morbi venenatis odio ullamcorper Lorem nec placerat turpis amet,
                ex </p>

          <p className="text-orange-500">
            demo
          </p>

        </div>

      </div>

      {/* TEAM */}
      <h2 className="text-2xl font-semibold mb-6">
        Meet Our Team
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {members.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}

      </div>

    </section>
  );
}

export default TeamSection;