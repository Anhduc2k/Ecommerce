import React from 'react'
import category from '../assets/fake-data/category'
import colors from '../assets/fake-data/product-color'
import size from '../assets/fake-data/product-size'
import productData from '../assets/fake-data/products'
import Button from '../components/Button'
import CheckBox from '../components/CheckBox'
import Grid from '../components/Grid'

import Helmet from '../components/Helmet'
import ProductCard from '../components/ProductCard'

const Catalog = () => {
  return (
    <Helmet title="Sản phẩm">
      <div className="catalog">
        <div className="catalog__filter">
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">Danh mục sản phẩm</div>
            <div className="catalog__filter__widget__content">
              {category.map((item, index) => (
                <div key={index} className="catalog__filter__widget__content__item">
                  <CheckBox label={item.display} />
                </div>
              ))}
            </div>
          </div>

          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">màu sắc</div>
            <div className="catalog__filter__widget__content">
              {colors.map((item, index) => (
                <div key={index} className="catalog__filter__widget__content__item">
                  <CheckBox label={item.display} />
                </div>
              ))}
            </div>
          </div>

          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">kích cỡ</div>
            <div className="catalog__filter__widget__content">
              {size.map((item, index) => (
                <div key={index} className="catalog__filter__widget__content__item">
                  <CheckBox label={item.display} />
                </div>
              ))}
            </div>
          </div>

          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__content">
              <Button size="sm">xóa bộ lọc</Button>
            </div>
          </div>
        </div>
        <div className="catalog__content">
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getAllProducts().map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </div>
      </div>
    </Helmet>
  )
}

export default Catalog
