import "../components/Process.css";

const Process = () => {
  return (
    <section className="process">
      <div className="process__inner">

        {/* HEADER */}
        <div className="process__header">
          <div className="section-label" style={{ justifyContent: "center" }}>
            From Farm to Brand
          </div>

          <h2 className="process__title">
            Our <em>Manufacturing</em><br />
            Process
          </h2>

          <p className="process__sub">
            Every packet you open has travelled through a precise 10-step journey – from a farmer's field to your kitchen shelf.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="process__timeline">

          {/* 01 */}
          <div className="process__tl-item">
            <div className="process__tl-connector"></div>
            <div className="process__tl-left">
              <div className="process__tl-num">01</div>
            </div>
            <div className="process__tl-body">
              <div className="process__tl-icon">🌱</div>
              <div>
                <div className="process__tl-title">Farmer Sourcing</div>
                <p className="process__tl-desc">
                  We partner directly with verified farmers across Rajasthan, Kerala and Gujarat to ensure origin-authentic produce.
                </p>
              </div>
            </div>
          </div>


          {/* 02 */}
          <div className="process__tl-item">
            <div className="process__tl-connector"></div>
            <div className="process__tl-left">
              <div className="process__tl-num">02</div>
            </div>
            <div className="process__tl-body">
              <div className="process__tl-icon">🔍</div>
              <div>
                <div className="process__tl-title">Raw Material Inspection</div>
                <p className="process__tl-desc">
                  Every incoming batch undergoes rigorous sampling and lab-grade inspection before entering our facility.
                </p>
              </div>
            </div>
          </div>

          {/* 03 */}
          <div className="process__tl-item">
            <div className="process__tl-connector"></div>
            <div className="process__tl-left">
              <div className="process__tl-num">03</div>
            </div>
            <div className="process__tl-body">
              <div className="process__tl-icon">🧹</div>
              <div>
                <div className="process__tl-title">Cleaning & Dust Removal</div>
                <p className="process__tl-desc">
                  Multi-stage mechanical cleaning removes dust, foreign particles and impurities with precision machinery.
                </p>
              </div>
            </div>
          </div>

          {/* 04 */}
          <div className="process__tl-item">
            <div className="process__tl-connector"></div>
            <div className="process__tl-left">
              <div className="process__tl-num">04</div>
            </div>
            <div className="process__tl-body">
              <div className="process__tl-icon">⚖️</div>
              <div>
                <div className="process__tl-title">Sorting & Grade Segregation</div>
                <p className="process__tl-desc">
                  Spices are sorted by size, colour and quality grade to ensure only the finest move to the next stage.
                </p>
              </div>
            </div>
          </div>

          {/* 05 */}
          <div className="process__tl-item">
            <div className="process__tl-connector"></div>
            <div className="process__tl-left">
              <div className="process__tl-num">05</div>
            </div>
            <div className="process__tl-body">
              <div className="process__tl-icon">☀️</div>
              <div>
                <div className="process__tl-title">Drying & Moisture Control</div>
                <p className="process__tl-desc">
                  Controlled drying brings moisture to optimal levels, preserving aroma and preventing microbial growth.
                </p>
              </div>
            </div>
          </div>

          {/* 06 */}
          <div className="process__tl-item">
            <div className="process__tl-connector"></div>
            <div className="process__tl-left">
              <div className="process__tl-num">06</div>
            </div>
            <div className="process__tl-body">
              <div className="process__tl-icon">🧪</div>
              <div>
                <div className="process__tl-title">Quality Testing & Batch Approval</div>
                <p className="process__tl-desc">
                  Each batch is tested for colour value, aroma potency and purity before it receives our QC approval stamp.
                </p>
              </div>
            </div>
          </div>

          {/* 07 */}
          <div className="process__tl-item">
            <div className="process__tl-connector"></div>
            <div className="process__tl-left">
              <div className="process__tl-num">07</div>
            </div>
            <div className="process__tl-body">
              <div className="process__tl-icon">📦</div>
              <div>
                <div className="process__tl-title">Hygienic Packing & Sealing</div>
                <p className="process__tl-desc">
                  Nitrogen-flushed, food-grade packing in our hygiene-controlled facility locks freshness at its peak.
                </p>
              </div>
            </div>
          </div>

          {/* 08 */}
          <div className="process__tl-item">
            <div className="process__tl-connector"></div>
            <div className="process__tl-left">
              <div className="process__tl-num">08</div>
            </div>
            <div className="process__tl-body">
              <div className="process__tl-icon">🏭</div>
              <div>
                <div className="process__tl-title">Warehouse Storage</div>
                <p className="process__tl-desc">
                  Finished goods are stored in temperature and humidity-controlled warehouses to maintain shelf quality.
                </p>
              </div>
            </div>
          </div>

                    {/* 09 */}
          <div className="process__tl-item">
            <div className="process__tl-connector"></div>
            <div className="process__tl-left">
              <div className="process__tl-num">09</div>
            </div>
            <div className="process__tl-body">
              <div className="process__tl-icon">🤝</div>
              <div>
                <div className="process__tl-title">Zero Compromise Policy</div>
                <p className="process__tl-desc">
                  Every stage follows uncompromising standards to deliver pure and authentic products.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;