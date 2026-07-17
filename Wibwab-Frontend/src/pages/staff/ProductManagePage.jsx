import { useState } from 'react';
// TODO: import { createProduct, updateProduct } from '../../api/staff.api';
// TODO: import { useNavigate, useParams } from 'react-router-dom';

/**
 * หน้าเพิ่ม/แก้ไขสินค้า (Product Management)
 * ใช้ทั้งสร้างสินค้าใหม่และแก้ไขสินค้าเดิม — ถ้ามี :id ใน route ให้โหลดข้อมูลเดิมมาแสดง
 */
export default function ProductManagePage() {
  const [form, setForm] = useState({
    name: '',
    description: '',
    basePrice: '',
    sku: '',
    category: '',
    material: '',
    status: 'active',
  });

  // ตัวเลือกไซซ์ของ variant "Ring Size" ตัวอย่าง — จริง ๆ ควรรองรับหลายกลุ่ม option (ไซซ์/สี/วัสดุ)
  const [ringSizes, setRingSizes] = useState(['US 5', 'US 6', 'US 7']);
  const [newSize, setNewSize] = useState('');

  function handleChange(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function addSize(e) {
    if (e.key === 'Enter' && newSize.trim()) {
      setRingSizes((prev) => [...prev, newSize.trim()]);
      setNewSize('');
    }
  }

  function removeSize(size) {
    setRingSizes((prev) => prev.filter((s) => s !== size));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: createProduct({ ...form, variants: ringSizes })
    console.log('Saving product', form, ringSizes);
  }

  return (
    <div>
      <div className="staff-breadcrumb">
        <a href="/staff/products">Products</a>
        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>chevron_right</span>
        <span className="staff-breadcrumb__current">Add New Product</span>
      </div>

      <div className="staff-page-header">
        <h1 style={{ fontSize: 30 }}>Add Product</h1>
        <div className="staff-page-header__actions">
          <button type="button" className="staff-btn staff-btn--secondary">Discard</button>
          <button type="submit" form="product-form" className="staff-btn staff-btn--primary">
            <span className="material-symbols-outlined">save</span>
            Save Product
          </button>
        </div>
      </div>

      <form id="product-form" onSubmit={handleSubmit} className="product-editor-grid">
        {/* Left column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Basic information */}
          <div className="staff-card">
            <div className="staff-card__header">
              <h3>
                <span className="material-symbols-outlined">info</span>
                Basic Information
              </h3>
            </div>
            <div className="staff-card__body">
              <div className="staff-form-group">
                <label className="staff-form-label" htmlFor="product-name">
                  Product Name <span className="required">*</span>
                </label>
                <input
                  id="product-name"
                  className="staff-form-control"
                  placeholder="e.g. 18k Gold Diamond Eternity Ring"
                  value={form.name}
                  onChange={handleChange('name')}
                  required
                />
              </div>

              <div className="staff-form-group">
                <label className="staff-form-label" htmlFor="product-description">Description</label>
                <textarea
                  id="product-description"
                  className="staff-form-control"
                  rows={4}
                  placeholder="Detailed product description..."
                  value={form.description}
                  onChange={handleChange('description')}
                />
              </div>

              <div className="staff-form-row staff-form-row--2col">
                <div className="staff-form-group" style={{ marginBottom: 0 }}>
                  <label className="staff-form-label" htmlFor="base-price">
                    Base Price (THB) <span className="required">*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--staff-text-muted)' }}>฿</span>
                    <input
                      id="base-price"
                      type="number"
                      className="staff-form-control"
                      style={{ paddingLeft: 28 }}
                      placeholder="0.00"
                      value={form.basePrice}
                      onChange={handleChange('basePrice')}
                      required
                    />
                  </div>
                </div>
                <div className="staff-form-group" style={{ marginBottom: 0 }}>
                  <label className="staff-form-label" htmlFor="sku">SKU Code</label>
                  <input
                    id="sku"
                    className="staff-form-control mono"
                    placeholder="RN-GLD-001"
                    value={form.sku}
                    onChange={handleChange('sku')}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Media */}
          <div className="staff-card">
            <div className="staff-card__header">
              <h3>
                <span className="material-symbols-outlined">image</span>
                Product Media
              </h3>
            </div>
            <div className="staff-card__body">
              <div className="staff-form-group">
                <label className="staff-form-label">Primary Image</label>
                <div className="staff-dropzone">
                  <div className="staff-dropzone__icon">
                    <span className="material-symbols-outlined" style={{ fontSize: 32 }}>cloud_upload</span>
                  </div>
                  <p style={{ margin: '0 0 4px', fontSize: 14 }}>Click to upload or drag and drop</p>
                  <p style={{ margin: 0, fontSize: 13, color: 'var(--staff-text-muted)' }}>
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </p>
                </div>
              </div>

              <div>
                <label className="staff-form-label">Gallery Images</label>
                <div className="staff-media-grid">
                  <div className="staff-media-upload">
                    <span className="material-symbols-outlined" style={{ fontSize: 24 }}>add_photo_alternate</span>
                    <span style={{ fontSize: 11 }}>Add More</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Organization */}
          <div className="staff-card">
            <div className="staff-card__header">
              <h3>
                <span className="material-symbols-outlined">category</span>
                Organization
              </h3>
            </div>
            <div className="staff-card__body">
              <div className="staff-form-group">
                <label className="staff-form-label" htmlFor="category">Category</label>
                <select
                  id="category"
                  className="staff-form-control"
                  value={form.category}
                  onChange={handleChange('category')}
                >
                  <option value="" disabled>Select Category</option>
                  <option value="rings">Rings</option>
                  <option value="necklaces">Necklaces</option>
                  <option value="earrings">Earrings</option>
                  <option value="bracelets">Bracelets</option>
                </select>
              </div>

              <div className="staff-form-group">
                <label className="staff-form-label" htmlFor="material">Primary Material</label>
                <select
                  id="material"
                  className="staff-form-control"
                  value={form.material}
                  onChange={handleChange('material')}
                >
                  <option value="" disabled>Select Material</option>
                  <option value="gold_18k">18k Yellow Gold</option>
                  <option value="white_gold_18k">18k White Gold</option>
                  <option value="platinum">Platinum</option>
                  <option value="silver">Sterling Silver</option>
                </select>
              </div>

              <div className="staff-form-group" style={{ marginBottom: 0 }}>
                <label className="staff-form-label">Product Status</label>
                <div className="staff-radio-group">
                  <label>
                    <input
                      type="radio"
                      name="status"
                      value="active"
                      checked={form.status === 'active'}
                      onChange={handleChange('status')}
                    />
                    Active
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="status"
                      value="draft"
                      checked={form.status === 'draft'}
                      onChange={handleChange('status')}
                    />
                    Draft
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Variants */}
          <div className="staff-card">
            <div className="staff-card__header">
              <h3>
                <span className="material-symbols-outlined">layers</span>
                Variants
              </h3>
              <button type="button" className="staff-card__link">
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>add</span> Add Option
              </button>
            </div>
            <div className="staff-card__body">
              <div style={{ border: '1px solid var(--staff-border)', borderRadius: 4, padding: 16, marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{ fontSize: 12, fontWeight: 600 }}>Ring Size</span>
                  <button type="button" className="staff-icon-btn" style={{ width: 24, height: 24 }} aria-label="ลบตัวเลือก">
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>close</span>
                  </button>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
                  {ringSizes.map((size) => (
                    <div className="staff-chip" key={size}>
                      {size}
                      <button type="button" onClick={() => removeSize(size)} aria-label={`ลบไซซ์ ${size}`}>
                        <span className="material-symbols-outlined" style={{ fontSize: 14 }}>close</span>
                      </button>
                    </div>
                  ))}
                  <input
                    type="text"
                    placeholder="Add size..."
                    value={newSize}
                    onChange={(e) => setNewSize(e.target.value)}
                    onKeyDown={addSize}
                    style={{ border: 'none', outline: 'none', width: 80, fontSize: 13 }}
                  />
                </div>
              </div>

              <div className="staff-table-wrap">
                <table className="staff-table" style={{ minWidth: 'auto' }}>
                  <thead>
                    <tr>
                      <th>Variant</th>
                      <th className="align-right">Price Modifier</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ringSizes.map((size, idx) => (
                      <tr key={size} className="is-row">
                        <td>{size}</td>
                        <td className="align-right">
                          {idx === 0 ? (
                            <span style={{ color: 'var(--staff-text-muted)' }}>Base Price</span>
                          ) : (
                            <input
                              type="number"
                              className="staff-form-control"
                              style={{ width: 96, textAlign: 'right', padding: '4px 8px' }}
                              placeholder="+/- ฿"
                              defaultValue="0.00"
                            />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* ปุ่ม Save/Discard แบบเต็มความกว้างสำหรับมือถือ */}
      <div className="staff-mobile-only" style={{ gap: 12, marginTop: 32, paddingBottom: 32 }}>
        <button type="button" className="staff-btn staff-btn--secondary" style={{ flex: 1, justifyContent: 'center' }}>
          Discard
        </button>
        <button type="submit" form="product-form" className="staff-btn staff-btn--primary" style={{ flex: 1, justifyContent: 'center' }}>
          Save Product
        </button>
      </div>

      <style>{`
        .product-editor-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 1280px) {
          .product-editor-grid {
            grid-template-columns: 2fr 1fr;
          }
        }
      `}</style>
    </div>
  );
}
