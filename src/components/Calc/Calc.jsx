import React, { useState, useRef, useEffect } from 'react';
import sun from './sun.png';
import sunset from './sunset.png';
import money from './money.png';
import solarPanel from './solar-panel.png';
import energy from './energy.png';
import Image from 'next/image';
import classes from './Calc.module.scss';

function Calculator() {
	const [checked, setChecked] = useState('south');
	const monthlyPriceRef = useRef();
	const selfConsumptionRef = useRef();
	const averagePriceOfBuyRef = useRef();
	const averagePriceOfSellRef = useRef();

	const [annuallyConsumption, setAnnuallyConsumption] = useState(3429);
	const [annuallySaving, setAnnuallySaving] = useState(0);
	const [annuallyPrice, setAnnuallyPrice] = useState(0);
	const [panelPower, setPanelPower] = useState(9);

	const handleCheckboxChange = (event) => {
		setChecked(event.target.value);
	};
	const [price, setPrice] = useState(0);

	useEffect(() => {
		calculate();
	}, [
		monthlyPriceRef,
		selfConsumptionRef,
		averagePriceOfBuyRef,
		averagePriceOfSellRef,
		checked,
	]);

	const calculate = () => {
		const monthlyPrice = monthlyPriceRef.current.value;
		const annuallyPrice = monthlyPrice * 12;
		const averagePriceOfBuy = averagePriceOfBuyRef.current.value;
		let multiplierDirection;
		const yearlyConsumption =
			Math.round(((monthlyPrice / averagePriceOfBuy) * 12) / 20) * 20;

		if (checked === 'south') {
			multiplierDirection = 0.91;
		} else if (checked === 'east/west') {
			multiplierDirection = 1.1;
		}

		const selfConsumption = selfConsumptionRef.current.value / 100;

		const averagePriceOfSell = averagePriceOfSellRef.current.value;

		const annuallySelfConsumption = yearlyConsumption * selfConsumption;

		const differentPriceSellBuy = averagePriceOfBuy - averagePriceOfSell;

		const yearlySavings = (
			annuallyPrice -
			(annuallyConsumption - annuallySelfConsumption) * differentPriceSellBuy
		).toFixed();

		const power = yearlyConsumption * multiplierDirection;
		const panelPower = Math.round(power / 100) * 100;
		const pricePanel = Math.round(panelPower * 2.5 + 5000);
		setPrice(pricePanel);
		setPanelPower(panelPower);

		setAnnuallySaving(yearlySavings);
		setAnnuallyPrice(annuallyPrice);
		setAnnuallyConsumption(yearlyConsumption);
	};

	const handleButtonClick = (ref, value) => {
		if (parseInt(ref.current.value) + value < 0) {
			return;
		}
		if (ref === selfConsumptionRef) {
			if (parseInt(ref.current.value) + value > 100) {
				return;
			}
		}
		if (ref === averagePriceOfBuyRef || ref === averagePriceOfSellRef) {
			const currentValue = ref.current.value;
			if (value === 0.01) {
				ref.current.value = (parseFloat(currentValue) + value).toFixed(2);
			} else {
				ref.current.value = (parseFloat(currentValue) - 0.01).toFixed(2);
			}
			calculate();
			return;
		}

		ref.current.value = parseInt(ref.current.value) + value;

		calculate();
	};

	return (
		<div className={classes.calculator}>
			<div className={classes.calcForm}>
				<div className={classes.calcForm__inputForm}>
					<label className={classes.label} htmlFor='monthlyPrice'>
						Ile płacisz miesięcznie za prąd?
					</label>
					<div className={classes.inputBox}>
						<button
							className={classes.inputButton_m}
							onClick={() => {
								handleButtonClick(monthlyPriceRef, -10);
							}}
						>
							-
						</button>
						<input
							className={classes.input}
							type='number'
							id='monthlyPrice'
							name='monthlyPrice'
							defaultValue={250}
							step={10}
							ref={monthlyPriceRef}
							onChange={calculate}
						/>
						<span className={classes.inputText}>PLN</span>
						<button
							className={classes.inputButton_p}
							onClick={() => {
								handleButtonClick(monthlyPriceRef, 10);
							}}
						>
							+
						</button>
					</div>
				</div>
				<div className={classes.calcForm__inputForm}>
					<label className={classes.label} htmlFor='selfConsumption'>
						Konsumpcja własna
					</label>
					<div className={classes.inputBox}>
						<button
							className={classes.inputButton_m}
							onClick={() => {
								handleButtonClick(selfConsumptionRef, -5);
							}}
						>
							-
						</button>
						<input
							className={classes.input}
							type='number'
							id='selfConsumption'
							name='selfConsumption'
							defaultValue={20}
							step={5}
							min={0}
							max={100}
							ref={selfConsumptionRef}
							onChange={calculate}
						/>
						<span className={classes.inputText}>%</span>
						<button
							className={classes.inputButton_p}
							onClick={() => {
								handleButtonClick(selfConsumptionRef, 5);
							}}
						>
							+
						</button>
					</div>
				</div>
				<div className={classes.calcForm__inputForm}>
					<label className={classes.label} htmlFor='averagePriceOfBuy'>
						Średnia cena zakupu prądu
					</label>

					<div className={classes.inputBox}>
						<button
							className={classes.inputButton_m}
							onClick={() => {
								handleButtonClick(averagePriceOfBuyRef, 1);
							}}
						>
							-
						</button>
						<input
							className={classes.input}
							type='number'
							id='averagePriceOfBuy'
							name='averagePriceOfBuy'
							defaultValue={0.91}
							ref={averagePriceOfBuyRef}
							onChange={calculate}
						/>
						<span className={classes.inputText}>zł/kWh</span>
						<button
							className={classes.inputButton_p}
							onClick={() => {
								handleButtonClick(averagePriceOfBuyRef, 0.01);
							}}
						>
							+
						</button>
					</div>
				</div>
				<div className={classes.calcForm__inputForm}>
					<label className={classes.label} htmlFor='averagePriceOfSell'>
						Średnia cena sprzedaży prądu
					</label>

					<div className={classes.inputBox}>
						<button
							className={classes.inputButton_m}
							onClick={() => {
								handleButtonClick(averagePriceOfSellRef, 1);
							}}
						>
							-
						</button>
						<input
							className={classes.input}
							type='number'
							id='averagePriceOfSell'
							name='averagePriceOfSell'
							defaultValue={0.52}
							ref={averagePriceOfSellRef}
							onChange={calculate}
						/>
						<span className={classes.inputText}>zł/kWh</span>
						<button
							className={classes.inputButton_p}
							onClick={() => {
								handleButtonClick(averagePriceOfSellRef, 0.01);
							}}
						>
							+
						</button>
					</div>
				</div>

				<div className={classes.calcForm__annually}>
					<span className={classes.calcForm__annually_s}>
						Roczne Zapotrzebowanie
					</span>
					<span className={classes.calcForm__annually_s}>
						{annuallyConsumption} kWh
					</span>
				</div>
				<div className={classes.direction}>
					<span className={classes.direction__text}>
						Kierunek montażu paneli{' '}
					</span>
					<div className={classes.direction__box}>
						<label
							className={`${classes.direction__label} ${
								checked === 'east/west' ? classes.direction__check : ''
							}`}
						>
							<Image
								className={classes.direction__label_img}
								src={sunset}
								alt='ikona słońca'
							/>
							<input
								type='checkbox'
								name='option'
								value='east/west'
								checked={checked === 'east/west'}
								onChange={handleCheckboxChange}
								className={classes.direction__label_input}
							/>
							wschód/zachód
						</label>

						<label
							className={`${classes.direction__label} ${
								checked === 'south' ? classes.direction__check : ''
							}`}
						>
							<Image
								className={classes.direction__label_img}
								src={sun}
								alt='ikona słońca'
							/>
							<input
								type='checkbox'
								name='option'
								value='south'
								checked={checked === 'south'}
								onChange={handleCheckboxChange}
								className={classes.direction__label_input}
							/>
							południe
						</label>
					</div>
				</div>
			</div>

			<div className={classes.infoCalc}>
				<div className={classes.infoCalc__item}>
					<Image
						className={classes.infoCalc__img}
						src={solarPanel}
						alt='ikona paneli'
					/>

					<span className={classes.infoCalc__title}>
						Szacunkowa moc instalacji:{' '}
					</span>
					<span className={classes.infoCalc__text}>{panelPower} kWp</span>
				</div>
				<div className={classes.infoCalc__item}>
					<Image
						className={classes.infoCalc__img}
						src={energy}
						alt='ikona światła'
					/>
					<span className={classes.infoCalc__title}>
						Roczny koszt energi bez instalacji paneli fotowoltaicznych:
					</span>
					<span className={classes.infoCalc__text}>{annuallyPrice} zł</span>
				</div>
				<div className={classes.infoCalc__item}>
					<Image
						className={classes.infoCalc__img}
						src={money}
						alt='ikona pieniędzy'
					/>
					<span className={classes.infoCalc__title}>
						Możliwe roczne oszczędności:{' '}
					</span>
					<span className={classes.infoCalc__text}> {annuallySaving} zł</span>
				</div>
			</div>
			<div className={classes.priceInfo}>
				<div className={classes.priceInfo__box}>
					<span className={classes.priceInfo__text}>
						Szacunkowa cena instalacji:
					</span>
					<span className={classes.priceInfo__price}>{price} zł</span>
				</div>
				<p className={classes.priceInfo__desc}>
					{' '}
					*Finalna cena może się różnić w zależności od pokrycia dachowego oraz
					systemu montażu{' '}
				</p>
			</div>
		</div>
	);
}

export default Calculator;
