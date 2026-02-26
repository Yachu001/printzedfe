function TeamCard({ member }) {

  if (!member) return null;

  return (
    <div className="text-center">

      <img
        src={member.image}
        alt={member.name}
        className="w-full h-[220px] object-cover rounded-lg mb-3"
      />

      <h4 className="text-orange-500 font-semibold">
        {member.name}
      </h4>

      <p className="text-gray-400 text-sm">
        {member.position}
      </p>

    </div>
  );
}

export default TeamCard;