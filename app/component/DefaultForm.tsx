

const DefaultForm = () => {

    return (
        <div className='mt-8 p-2'>
            <input
                className="border border-gray-800 rounded w-full mb-2 py-2 px-3 "
                type="text"
                name="name"
                placeholder="Name"
                required
            />

            <input
                className="border border-gray-800 rounded w-full mb-2 py-2 px-3 "
                type="email"
                name="email"
                placeholder="Email"
                required
            />
            <input
                className="border border-gray-800 rounded w-full mb-2 py-2 px-3 "
                type="tel"
                name="phone"
                placeholder="Phone"
                required
            />

            <input
                className="border border-gray-800 rounded w-full mb-2 py-2 px-3 "
                type="text"
                name="sources"
                placeholder="Where did you hear about us? (optional)"
            />
            <textarea
                className="border h-36 border-gray-800 rounded w-full mb-2 py-2 px-3 "
                name="description"
                placeholder="Tell us about your projects"
                required
            />
            <button className="flex flex-row bg-blue-500 text-white px-4 py-2" type="submit">submit</button>
        </div>
    )
}

export default DefaultForm