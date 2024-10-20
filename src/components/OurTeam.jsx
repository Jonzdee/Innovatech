const people = [
    {
      name: 'Johnson Olayemi',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://scontent.flos1-1.fna.fbcdn.net/v/t39.30808-1/439255106_1240491676931637_5561760095675072915_n.jpg?stp=c8.0.614.614a_dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=50d2ac&_nc_eui2=AeHFpbqdHuf6JfVufYbrGOg66xRodjS4BfLrFGh2NLgF8h5V0xWQCOzhjAAmuV8q83QxQjQ76O9LE_Z_F5rOzlBJ&_nc_ohc=pXLINa7MTQMQ7kNvgFDMwcX&_nc_zt=24&_nc_ht=scontent.flos1-1.fna&_nc_gid=Ar7j_EF-TnKMSe-6naSZM8S&oh=00_AYBr6pPojLI2SRrx4k0-_Dt0EE9_hicqq-9IFK1L8P-1TA&oe=671AF81E',
    },
    {
        name: 'Elemma Cynthia',
        role: 'CEO',
        imageUrl:
          './../assets/cnyt.jpg',
      },
      
    // More people...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Our leaders are dedicated to guiding the organization with passion and expertise. They believe in fostering an environment where innovation thrives and collaboration is key.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img alt="" src={person.imageUrl} className="h-16 w-16 rounded-full" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  