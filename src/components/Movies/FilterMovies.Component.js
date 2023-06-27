// components/Movies/FilterMovies.Component.js
import React, { useState } from 'react';

const FilterMovies = ({ onFilterChange }) => {
  const platforms = [
    {
      name: 'Netflix',
      logo: 'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456',
    },
    {
      name: 'Amazon Prime Video',
      logo: 'https://store-images.s-microsoft.com/image/apps.37888.14618985536919905.3e754390-a812-43d7-87fc-335159cd867b.f9c3de38-8b93-42bb-a403-0374ccf355cd',
    },
    {
      name: 'Disney+',
      logo: 'https://store-images.s-microsoft.com/image/apps.7471.14495311847124170.e89a4dce-fd9a-4a10-b8e4-a6c3aa1c055e.03d81561-4078-4efb-8884-19e1161ab56b',
    },
    {
      name: 'HBO MAX',
      logo: 'https://play-lh.googleusercontent.com/1iyX7VdQ7MlM7iotI9XDtTwgiVmqFGzqwz10L67XVoyiTmJVoHX87QtqvcXgUnb0AC8',
    },
    {
      name: 'Hulu',
      logo: 'https://play-lh.googleusercontent.com/4whGAVjZGrrlNxzheKAfBXrxggtyAb4euWLeQI8fDfVfdnFEZjE0DZTJ8DKoh64pqcIa',
    },
    {
      name: 'Apple TV+',
      logo: 'https://pyxis.nymag.com/v1/imgs/506/8a5/3e95892ff5584ba3892cb905a04e1416d8-01-apple-tv-plus.rsquare.w330.jpg',
    },
    // Add more platforms here...
  ];

  const [activePlatforms, setActivePlatforms] = useState([]);

  const handleFilterChange = (platform) => {
    if (activePlatforms.includes(platform)) {
      setActivePlatforms(activePlatforms.filter((p) => p !== platform));
    } else {
      setActivePlatforms([...activePlatforms, platform]);
    }

    // Llama a la función onFilterChange y pasa la lista de plataformas activas
    onFilterChange(activePlatforms);
  };

  return (
    <div className="filter">
      {platforms.map((platform) => {
        const isActive = activePlatforms.includes(platform.name);

        return (
          <button
            key={platform.name}
            onClick={() => handleFilterChange(platform.name)}
            className={`filter-button ${isActive ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${platform.logo})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '50px',
              height: '50px',
              margin: '5px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            {isActive && <span className="check">✓</span>}
          </button>
        );
      })}
    </div>
  );
};

export default FilterMovies;
