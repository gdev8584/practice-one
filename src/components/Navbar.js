import React from 'react'

const Navbar = ({clikID}) => {
  return (
    <nav className="navbar navbar-expand bg-light">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul style={{cursor:"pointer"}}className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <p className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Filter by BodyType
          </p>
          <ul style={{cursor:"pointer"}}className="dropdown-menu">
          <li><p className="dropdown-item" onClick={() => clikID("all")}>ALL</p></li>
            <li><p className="dropdown-item" onClick={() => clikID("suv")}>SUV</p></li>
            <li><p className="dropdown-item" onClick={() => clikID("estate")}>ESTATE</p></li>
            <li><p className="dropdown-item" onClick={() => clikID("sedan")}>SEDAN</p></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar