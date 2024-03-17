import React from "react";

const TestimonialCard = ({ name, role, imageSrc, content }) => {
  return (
    <div className="max-w-xs mx-auto overflow-hidden shadow-lg rounded-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
      <img src={imageSrc} className="w-full h-auto" alt={name} />
      <div className="p-4">
        <h5 className="mb-2 text-lg font-bold">{name}</h5>
        <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
          {role}
        </h6>
        <p className="mb-4">{content}</p>
        <ul className="mb-0 flex justify-center">
          {[...Array(5)].map((_, index) => (
            <li key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 96 960 960"
                className="w-5 text-warning"
              >
                <path
                  fill="currentColor"
                  d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Smantha",
      role: "Web Developer",
      imageSrc: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic.",
    },
    {
      name: "Lisa Cudrow",
      role: "Graphic Designer",
      imageSrc: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg",
      content:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.",
    },
    {
      name: "John Smith",
      role: "Marketing Specialist",
      imageSrc: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg",
      content:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
    },
  ];

  return (
    <div className="container my-20 mx-auto md:px-4">
      <section className="text-center">
        <div className="grid gap-x-4 md:grid-cols-3 lg:gap-x-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
