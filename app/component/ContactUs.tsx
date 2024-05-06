
import DefaultForm from './DefaultForm';
const ContactForm = () => {



    const createAccount = async (formData: FormData) => {
        "use server";
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const sources = formData.get("sources");
        const description = formData.get("description");

        console.log({ name, email, phone, sources, description });

    };
    return (
        <div className='bg-gradient-to-r from-blue-500 to-transparent'>
            <div className="text-left p-2 ">
                <h1 className=" text-center text-l md:text-xl lg:text-2xl xl:text-3xl font-bold">
                    Lets Have a Chat</h1>
                <p className="text-center text-base text-xl">
                    Feel free to use the contact form to reach out to us</p>
            </div>
            <form action={createAccount} method="POST" className="max-w-md mx-auto my-2" >
                <div>
                    <DefaultForm />
                </div>
            </form >
        </div>


    )

}

export default ContactForm

