import React, { useState, useEffect, useMemo, useRef } from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
    const [currencies, setCurrencies] = useState([]);
    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('');
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const sectionRefs = useRef([]);

    useEffect(() => {
        setLoading(true);
        fetch('https://api.exchangeratesapi.io/latest')
            .then(response => response.json())
            .then(data => {
                if (data && data.rates) {
                    const currencyList = Object.keys(data.rates);
                    setCurrencies(currencyList);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching currency data:', error);
                setError('No se pudieron cargar las divisas');
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (fromCurrency && toCurrency) {
            fetch(`https://api.exchangeratesapi.io/latest?base=${fromCurrency}&symbols=${toCurrency}`)
                .then(response => response.json())
                .then(data => {
                    if (data && data.rates) {
                        const rate = data.rates[toCurrency];
                        setConvertedAmount(amount * rate);
                    }
                })
                .catch(error => {
                    console.error('Error fetching exchange rate:', error);
                });
        }
    }, [fromCurrency, toCurrency, amount]);

    const countriesWithFlags = useMemo(() => [
        { name: 'Antigua y Barbuda', flag: '🇦🇬' },
        { name: 'Argentina', flag: '🇦🇷' },
        { name: 'Bahamas', flag: '🇧🇸' },
        { name: 'Barbados', flag: '🇧🇧' },
        { name: 'Belice', flag: '🇧🇿' },
        { name: 'Bolivia', flag: '🇧🇴' },
        { name: 'Brasil', flag: '🇧🇷' },
        { name: 'Canadá', flag: '🇨🇦' },
        { name: 'Chile', flag: '🇨🇱' },
        { name: 'Colombia', flag: '🇨🇴' },
        { name: 'Costa Rica', flag: '🇨🇷' },
        { name: 'Cuba', flag: '🇨🇺' },
        { name: 'Dominica', flag: '🇩🇲' },
        { name: 'Ecuador', flag: '🇪🇨' },
        { name: 'El Salvador', flag: '🇸🇻' },
        { name: 'Estados Unidos', flag: '🇺🇸' },
        { name: 'Granada', flag: '🇬ḏ' },
        { name: 'Guatemala', flag: '🇬🇹' },
        { name: 'Guyana', flag: '🇬🇾' },
        { name: 'Haití', flag: '🇭🇹' },
        { name: 'Honduras', flag: '🇭🇳' },
        { name: 'Jamaica', flag: '🇯🇲' },
        { name: 'México', flag: '🇲🇽' },
        { name: 'Nicaragua', flag: '🇳🇮' },
        { name: 'Panamá', flag: '🇵🇦' },
        { name: 'Paraguay', flag: '🇵🇾' },
        { name: 'Perú', flag: '🇵🇪' },
        { name: 'República Dominicana', flag: '🇩🇴' },
        { name: 'San Cristóbal y Nieves', flag: '🇰🇳' },
        { name: 'San Vicente y las Granadinas', flag: '🇻🇨' },
        { name: 'Santa Lucía', flag: '🇱🇨' },
        { name: 'Surinam', flag: '🇸🇷' },
        { name: 'Trinidad y Tobago', flag: '🇹🇹' },
        { name: 'Uruguay', flag: '🇺🇾' },
        { name: 'Venezuela', flag: '🇻🇪' }
    ], []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        });

        const currentRefs = sectionRefs.current;

        currentRefs.forEach((section) => {
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            currentRefs.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className="home-page">
            <section className="features" ref={(el) => sectionRefs.current[0] = el}>
                <h2 className="features-title">Nuestros Servicios</h2> {/* Título separado */}
                <div className="feature-items">
                    <div className="feature-item">
                        <h3>Transferencia Internacional</h3>
                        <p>Envía dinero de manera rápida y segura a cualquier parte del mundo.
                            Con nuestra plataforma, puedes realizar transferencias internacionales con facilidad,
                            asegurándote de que tus fondos lleguen de manera segura a su destino. Además,
                            nuestro avanzado sistema de seguridad protege tus transacciones en cada paso del proceso,
                            brindándote total confianza. Ya sea que envíes dinero a tu familia, amigos o socios comerciales,
                            puedes hacerlo con la tranquilidad de que siempre estamos cuidando tus intereses.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Historial de Transacciones</h3>
                        <p>Mantén el control de todas tus operaciones con acceso instantáneo a tu historial de transacciones. Desde tu perfil,
                            puedes revisar fácilmente todos los envíos de dinero realizados,
                            consultar los detalles de cada transferencia y verificar el estado actual de tus operaciones.
                            Nuestra plataforma organiza de manera clara y detallada tus transacciones para que puedas acceder a esta información cuando la necesites,
                            brindándote transparencia y control total sobre tus movimientos financieros.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Conversión de Moneda</h3>
                        <p>Convierte tu dinero en diferentes monedas al instante y con las mejores tasas de cambio disponibles.
                            Ya no tienes que preocuparte por complicados procesos de conversión;
                            nuestra herramienta automática te permite cambiar divisas de manera rápida y eficiente.
                            Además, ofrecemos tasas competitivas en tiempo real,
                            para que siempre obtengas el mejor valor por tu dinero al enviar fondos a cualquier parte del mundo.</p>
                    </div>
                </div>
            </section>

            <section className="currency-converter" ref={(el) => sectionRefs.current[1] = el}>
                <h2>Calculadora de Conversión de Moneda</h2>
                {loading ? (
                    <p>Cargando datos de divisas...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <div className="currency-inputs">
                        <input
                            type="number"
                            value={amount}
                            onChange={e => setAmount(e.target.value)}
                        />
                        <select
                            value={fromCurrency}
                            onChange={e => setFromCurrency(e.target.value)}
                        >
                            {currencies.map(currency => (
                                <option key={currency} value={currency}>
                                    {currency}
                                </option>
                            ))}
                        </select>
                        <span>equivale a</span>
                        <input type="text" readOnly value={convertedAmount.toFixed(2)} />
                        <select
                            value={toCurrency}
                            onChange={e => setToCurrency(e.target.value)}
                        >
                            {currencies.map(currency => (
                                <option key={currency} value={currency}>
                                    {currency}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
            </section>

            <section className="countries-list" ref={(el) => sectionRefs.current[2] = el}>
                <h2>Países Disponibles</h2>
                <ul>
                    {countriesWithFlags.map(country => (
                        <li key={country.name}>
                            {country.flag} {country.name}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="customer-reviews" ref={(el) => sectionRefs.current[3] = el}>
                <h2>Descubre por qué millones de personas alrededor del mundo confían en PROMETEOREMITLY</h2>

                <div className="review-item">
                    <h4>Daniela Rodríguez</h4>
                    <p>"Estoy muy impresionada con esta aplicación. Las tasas de cambio son muy competitivas y el proceso es súper sencillo.
                        Mi mamá en Colombia siempre recibe el dinero sin problemas, y la atención al cliente es excelente.
                        ¡Recomendadísima!"</p>
                    <div className="stars">★★★★★</div> {/* Añadido las estrellas */}
                </div>

                <div className="review-item">
                    <h4>Carlos Rodríguez</h4>
                    <p>"La mejor forma de enviar dinero internacionalmente. Tarifas bajas y transacciones rápidas."</p>
                    <div className="stars">★★★★★</div> {/* Añadido las estrellas */}
                </div>

                <div className="review-item">
                    <h4>Fernando Lugo</h4>
                    <p>"¡Excelente aplicación! Enviar dinero a mi familia en Colombia nunca había sido tan fácil.
                        La transferencia fue rápida y recibieron el dinero en su cuenta bancaria en cuestión de minutos.
                        Definitivamente la mejor opción para enviar remesas."</p>
                    <div className="stars">★★★★★</div> {/* Añadido las estrellas */}
                </div>

                <div className="review-item">
                    <h4>Nelson Ramirez</h4>
                    <p>"He probado varias aplicaciones para enviar dinero a Colombia, pero esta es sin duda la mejor.
                        El servicio es rápido, seguro y confiable.
                        Además, puedo ver el tipo de cambio en tiempo real y siempre he tenido buenas experiencias con las transferencias."</p>
                    <div className="stars">★★★★★</div> {/* Añadido las estrellas */}
                </div>

            </section>


            <section className="associated-banks" ref={(el) => sectionRefs.current[4] = el}>
                <h2>Retiro de efectivo y depósito bancario</h2>
                <div className="bank-logos">
                    <img src="ruta/logo-banco1.png" alt="Bancolombia" loading="lazy" />
                    <img src="ruta/logo-banco2.png" alt="DAVIVIENDA" loading="lazy" />
                    <img src="ruta/logo-banco3.png" alt="GRUPO AVAL" loading="lazy" />
                </div>
            </section>

            <footer className="footer" ref={(el) => sectionRefs.current[5] = el}>
                <div className="footer-container">
                    <div className="footer-section">
                        <h4>Acerca de Nosotros</h4>
                        <p>PROMETEOREMITLY es una plataforma confiable para transferencias de dinero rápidas y seguras.</p>
                    </div>
                    <div className="footer-section">
                        <h4>Enlaces Rápidos</h4>
                        <ul>
                            <li><a href="/about">Sobre Nosotros</a></li>
                            <li><a href="/services">Servicios</a></li>
                            <li><a href="/contact">Contacto</a></li>
                            <li><a href="/faq">Preguntas Frecuentes</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Contacto</h4>
                        <p>Teléfono: +1 234 567 890</p>
                        <p>Email: contacto@prometeo.com</p>
                        <p>Dirección: Calle Falsa 123, Medellin, Colombia</p>
                    </div>
                    <div className="footer-section">
                        <h4>Redes Sociales</h4>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h4>Suscríbete a nuestro Boletín</h4>
                        <form>
                            <input type="email" placeholder="Ingresa tu correo electrónico" />
                            <button type="submit">Suscribirse</button>
                        </form>
                    </div>
                </div>
                <p>&copy; 2023 PROMETEO. Todos los derechos reservados.</p>
            </footer>

        </div>
    );
};

export default HomePage;

