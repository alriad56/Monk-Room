const ShareNotes = () => {
    return (
        <div className="max-w-2xl mx-auto p-6">

            <h2 className="text-2xl font-bold mb-6">
                Share a Note
            </h2>

            {/* File Upload */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">

                <h3 className="text-lg font-semibold">
                    Drop a file here
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                    PDF, DOCX, images or slides up to 25 MB
                </p>

                <label className="inline-block mt-5">
                    <input
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.ppt,.pptx"
                    />

                    <span className="btn btn-primary cursor-pointer">
                        Choose file
                    </span>
                </label>

            </div>


            {/* Note Information */}
            <div className="mt-6">

                <label className="block font-semibold mb-2">
                    Note title
                </label>

                <input
                    type="text"
                    placeholder="Enter your note title"
                    className="input input-bordered w-full"
                />

                <textarea
                    placeholder="Write a short description"
                    className="textarea textarea-bordered w-full mt-4"
                >
                </textarea>

                <button className="btn btn-primary mt-4">
                    Share note
                </button>

            </div>


            {/* Share with Link */}
            <div className="bg-base-200 p-5 rounded-xl mt-6">

                <h3 className="text-lg font-semibold mb-2">
                    Share with Link
                </h3>

                <p className="text-sm mb-4">
                    Create a link and share your note with others.
                </p>

                <button className="btn btn-primary">
                    Create Share Link
                </button>

                <div className="flex gap-2 mt-4">

                    <input
                        type="text"
                        placeholder="Your share link will appear here"
                        className="input input-bordered w-full"
                        readOnly
                    />

                    <button className="btn">
                        Copy
                    </button>

                </div>

            </div>


            {/* Share with Code */}
            <div className="bg-base-200 p-5 rounded-xl mt-6">

                <h3 className="text-lg font-semibold mb-2">
                    Share with Code
                </h3>

                <p className="text-sm mb-4">
                    Generate a code and share it with your friend.
                </p>

                <button className="btn btn-primary">
                    Generate Code
                </button>

                <div className="flex gap-2 mt-4">

                    <input
                        type="text"
                        placeholder="Your share code will appear here"
                        className="input input-bordered w-full"
                        readOnly
                    />

                    <button className="btn">
                        Copy
                    </button>

                </div>

            </div>


            {/* Receive with Code */}
            <div className="bg-base-200 p-5 rounded-xl mt-6">

                <h3 className="text-lg font-semibold mb-2">
                    Receive with Code
                </h3>

                <p className="text-sm mb-4">
                    Enter the code shared by your friend.
                </p>

                <div className="flex gap-2">

                    <input
                        type="text"
                        placeholder="Enter share code"
                        className="input input-bordered w-full"
                    />

                    <button className="btn btn-primary">
                        Receive
                    </button>

                </div>

            </div>

        </div>
    );
};

export default ShareNotes;