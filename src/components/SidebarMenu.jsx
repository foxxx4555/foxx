import React from 'react';

const SidebarMenu = ({ 
  isOpen, 
  onClose, 
  searchQuery, 
  setSearchQuery, 
  categories, 
  activeCategory, 
  setActiveCategory,
  onAdminClick 
}) => {
  return (
    <>
      {/* Overlay to dim background when sidebar is open */}
      <div 
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`} 
        onClick={onClose}
      ></div>

      {/* Sidebar Drawer */}
      <div className={`sidebar-drawer ${isOpen ? 'open' : ''}`}>
        
        {/* Header of the sidebar */}
        <div className="sidebar-header">
          <div className="sidebar-logo">
            رايت <span>ووتر</span>
          </div>
          <button className="sidebar-close-btn" onClick={onClose} aria-label="Close menu">
            ×
          </button>
        </div>

        {/* Inner Context */}
        <div className="sidebar-content">
          
          {/* Smart Search */}
          <div className="sidebar-search">
            <input
              type="text"
              placeholder="بحث عن منتج..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <h3 className="sidebar-title">أقسام المنتجات</h3>
          
          {/* Categories Accordion/List */}
          <div className="sidebar-categories">
            <button 
              className={`sidebar-cat-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => { setActiveCategory('all'); onClose(); }}
            >
              <span>جميع المنتجات</span>
              {activeCategory === 'all' && <span className="active-dot"></span>}
            </button>
            
            {categories.map(cat => (
              <button 
                key={cat}
                className={`sidebar-cat-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => { setActiveCategory(cat); onClose(); }}
              >
                <span>{cat}</span>
                {activeCategory === cat && <span className="active-dot"></span>}
              </button>
            ))}
          </div>

        </div>

        {/* Footer of the sidebar (Admin Panel) */}
        <div className="sidebar-footer">
          <button className="sidebar-admin-btn" onClick={() => { onAdminClick(); onClose(); }}>
            🛡️ تسجيل دخول الإدارة
          </button>
        </div>

      </div>
    </>
  );
};

export default SidebarMenu;
