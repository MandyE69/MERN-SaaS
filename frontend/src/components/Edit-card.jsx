


function EditCard() {
    return (
        <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Edit Product</h2>
            <form action="#" method="POST" className="space-y-4">
                {/* Product Name */}
                <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="name">Product Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter product name" className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-black focus:outline-none" />
                </div>
                {/* Product Price */}
                <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="price">Price ($)</label>
                    <input type="number" id="price" name="price" placeholder="Enter price" className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-black focus:outline-none" />
                </div>
                {/* Product Description */}
                <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="description">Description</label>
                    <textarea id="description" name="description" rows={3} placeholder="Write a short description" className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-black focus:outline-none" defaultValue={""} />
                </div>
                {/* Product Image URL */}
                <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="image">Image URL</label>
                    <input type="text" id="image" name="image" placeholder="https://example.com/image.jpg" className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-black focus:outline-none" />
                </div>
                {/* Submit Button */}
                <div className="pt-2">
                    <button type="submit" className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-white hover:border hover:text-black transition">
                        Update Product
                    </button>
                </div>
            </form>
        </div>
    )
};

export default EditCard