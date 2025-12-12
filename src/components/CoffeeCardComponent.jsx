import React from 'react';

function CoffeeCardComponent({ data }) {
  // returns a nothing state (text only) when no data meets filter requirements
  if (!data || data.length === 0) {
    return (
      <div id="coffee-card-list-container" className="empty">
        <h2>No Coffee Records Found</h2>
        <p>Please adjust your filters to see results.</p>
      </div>
    );
  }

  const renderCard = (item) => {
    // Attributes to display, grouped for better layout
    const scoreAttributes = [
      'Aroma', 'Flavor', 'Aftertaste', 'Acidity', 'Body',
      'Balance', 'Uniformity', 'CleanCup', 'Sweetness', 'CupperPoints'
    ];
    
    // Altitude attributes and their display names
    const altitudeAttributes = [
        { key: 'AltitudeLowMeters', label: 'Min Altitude (m)' },
        { key: 'AltitudeHighMeters', label: 'Max Altitude (m)' },
        { key: 'AltitudeMeanMeters', label: 'Mean Altitude (m)' },
    ];

    // Simple helper to format value or show placeholder
    const formatValue = (value) => value && value.trim() !== '' ? value : 'N/A';

    return (
      <div className="coffee-card" key={item.Id}>
        <div className="card-header">
          <h3>Coffee ID: {item.Id} ({formatValue(item.Country)})</h3>
          <h4>Total Score: <span className="total-score">{formatValue(item.TotalCupPoints)}</span> / 100</h4>
        </div>

        <div className="card-section metadata-section">
          <h4>Metadata</h4>
          <p><strong>Owner:</strong> {formatValue(item.Owner)}</p>
          <p><strong>Region:</strong> {formatValue(item.Region)}</p>
          <p><strong>Species:</strong> {formatValue(item.Species)}</p>
          <p><strong>Variety:</strong> {formatValue(item.Variety)}</p>
          <p><strong>Color:</strong> <span className={`color-pill ${item.Color.toLowerCase().replace('-', '')}`}>{formatValue(item.Color)}</span></p>
        </div>
        
        <div className="card-section scores-section">
          <h4>Scoring (Out of 10)</h4>
          <div className="scores-grid">
            {scoreAttributes.map(attr => (
              <p key={attr}>
                <strong>{attr}:</strong> {formatValue(item[attr])}
              </p>
            ))}
          </div>
        </div>

        <div className="card-section altitude-section">
            <h4>Altitude</h4>
            <div className="altitude-grid">
                {altitudeAttributes.map(attr => (
                    <p key={attr.key}>
                        <strong>{attr.label}:</strong> {formatValue(item[attr.key])}
                    </p>
                ))}
            </div>
        </div>

      </div>
    );
  };

  return (
    <div id="coffee-card-list-container">
      <h2>Filtered Coffee Results ({data.length} records)</h2>
      <div className="coffee-card-grid">
        {data.map(renderCard)}
      </div>
    </div>
  );
}

export default CoffeeCardComponent;