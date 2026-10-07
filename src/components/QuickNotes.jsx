const QuickNotes = () => {
    return (
        <div className="p-6">

            <h1 className="text-2xl font-bold">
                Quick Notes
            </h1>

            <div className="mt-6">
                <textarea
                    placeholder="Write something..."
                    className="textarea textarea-bordered w-full h-32"
                ></textarea>

                <button className="btn btn-primary mt-3">
                    Save Note
                </button>
            </div>

        </div>
    );
};

export default QuickNotes;