function CreateAccount(){
    return(
        <div className='flex flex-col justify-center items-center w-screen h-screen 
        bg-gradient-to-br from-emerald-700 to-emerald-200'>
            <h1 className="text-emerald-200 text-5xl pb-4 ">NEW ACCOUNT</h1>
            <div className="flex flex-col items-center nm-flat-white-xs w-96 h-96 rounded-lg">
                <label className="mt-10 text-3xl text-emerald-800 " >New Usuario:</label>
                <input type="text" className="px-7 py-2 text-lg rounded-lg nm-inset-emerald-100 text-center"  />
                <label className="mt-10 text-3xl text-emerald-800" >New Password:</label>
                <input type="password" className="px-7 py-2 text-lg rounded-lg nm-inset-emerald-100 text-center" />
                <button className="text-3xl nm-flat-emerald-700-xs text-emerald-300 mt-16 px-4 rounded-md 
                transition ease-in-out delay-300ms hover:scale-110 active:scale-100">
                    Create
                </button>
            </div>
        </div>
    );
}

export default CreateAccount;