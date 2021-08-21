import React from 'react'

const CategoryBar = () => {
    return (
      <div className="bg-dark ">
        <div className="row">
          <div className="col btn text-light">
            <h2 className="text-light">Books</h2>
          </div>

          <div className="col btn ">
            <h2 className="text-light">Beauty</h2>
          </div>

          <div className="col btn ">
            <h2 className="text-light">Electronics</h2>
          </div>
          <div className="col btn ">
            <h2 className="text-light">Tools</h2>
          </div>
          <div className="col btn ">
            <h2 className="text-light">Decor</h2>
          </div>
        </div>
      </div>
    );
}

export default CategoryBar
