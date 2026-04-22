import React, { useState } from 'react';
import ProductCard from './ProductCard';
import CategoryTabs from './CategoryTabs';
import QuickViewModal from './QuickViewModal';

const ProductCatalog = ({ products, onAddToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openQuickView = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // تجميع المنتجات حسب القسم
  const groupedProducts = products.reduce((acc, product) => {
    const cat = product.category || 'أخرى';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(product);
    return acc;
  }, {});

  // ترتيب الأقسام كما طلب العميل
  const categoryOrder = [
    "بوست",
    "كالسيد",
    "ألكلاين",
    "طقم الكومباكت",
    "فلاتر رايت ووتر",
    "خزان"
  ];

  const sortedCategories = Object.keys(groupedProducts).sort((a, b) => {
    let indexA = categoryOrder.indexOf(a);
    let indexB = categoryOrder.indexOf(b);
    if (indexA === -1) indexA = 999;
    if (indexB === -1) indexB = 999;
    return indexA - indexB;
  });

  return (
    <div className="catalog-container">
      {products.length === 0 ? (
        <div className="empty-state">
          <p>عذراً، لم يتم العثور على منتجات تطابق بحثك.</p>
        </div>
      ) : (
        <div className="grouped-product-sections">
          {sortedCategories.map(cat => (
            <div key={cat} className="category-section">
              <h2 className="category-section-title">{cat}</h2>
              <div className="product-grid">
                {groupedProducts[cat].map((product, index) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    index={index} 
                    onAddToCart={onAddToCart} 
                    onQuickView={() => openQuickView(product)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <QuickViewModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={onAddToCart}
      />
    </div>
  );
};

export default ProductCatalog;
