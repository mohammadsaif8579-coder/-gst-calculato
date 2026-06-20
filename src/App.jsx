import React, { useMemo, useState } from 'react'
import './App.css'

export default function App() {
  const [amount, setAmount] = useState('')
  const [rate, setRate] = useState(18)

  const parsed = parseFloat(amount) || 0
  const gstAmount = useMemo(() => (parsed * rate) / 100, [parsed, rate])
  const total = useMemo(() => parsed + gstAmount, [parsed, gstAmount])

  return (
    <div className="app">
      <div className="card">
        <div className="header">
          <h1>GST Calculator</h1>
          <p className="subtitle">Quickly compute GST and total amount</p>
        </div>

        <div className="form">
          <label className="field">
            <span>Amount</span>
            <input
              type="number"
              min="0"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
            />
          </label>

          <label className="field">
            <span>GST Rate</span>
            <div className="rates">
              {[5, 12, 18, 28].map((r) => (
                <label key={r} className={`rate ${rate === r ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="rate"
                    value={r}
                    checked={rate === r}
                    onChange={() => setRate(r)}
                  />
                  <span>{r}%</span>
                </label>
              ))}
            </div>
          </label>
        </div>

        <div className="results">
          <div className="result">
            <div className="label">GST Amount</div>
            <div className="value">₹ {gstAmount.toFixed(2)}</div>
          </div>
          <div className="result">
            <div className="label">Total Amount</div>
            <div className="value total">₹ {total.toFixed(2)}</div>
          </div>
        </div>

        <div className="footer">
          <div className="author">
            <div className="name">Mohammad Saif</div>
            <a href="mailto:mohammadsaif8579@gmail.com">mohammadsaif8579@gmail.com</a>
          </div>
          <a
            className="cta"
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noreferrer"
          >
            Built for Digital Heroes
          </a>
        </div>
      </div>
    </div>
  )
}
