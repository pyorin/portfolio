const ContactComp = ({ link, sosmed }) => {
  return (
    <div>
      <li>
        <a className="text-links font-semibold hover:underline" href={link}>
          {sosmed}
        </a>
      </li>
    </div>
  );
};

export default ContactComp;
