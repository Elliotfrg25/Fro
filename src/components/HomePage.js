import { DollarSign, Globe, Shield } from "lucide-react";
import styles from '../styles/HomePage.module.css';

export default function Homepage() {
    return (
        <div className={styles['homepage']}>

            <main>
                <section className={styles['hero-section']}>
                    <div className={styles['hero-content']}>
                        <div className={styles['hero-text']}>
                            <h1>Envía dinero a casa de forma rápida y segura</h1>
                            <p>PrometeoRemitly te permite enviar dinero a Colombia y otros países de Sudamérica desde Estados Unidos con tarifas bajas y tipos de cambio competitivos.</p>
                            <div className={styles['hero-buttons']}>
                                <button className={styles['primary-btn']}>Registrarse</button>
                                <button className={styles['secondary-btn']}>Más información</button>
                            </div>
                        </div>

                        <div className={styles['calculator']}>
                            <div className={styles['calculator-content']}>
                                <h2>Envía dinero ahora</h2>
                                <p>Calcula cuánto recibirá tu familia</p>
                                <div className={styles['input-group']}>
                                    <label htmlFor="amount">Cantidad a enviar (USD)</label>
                                    <input id="amount" placeholder="Ej: 500" type="number" />
                                </div>
                                <div className={styles['input-group']}>
                                    <label htmlFor="country">País de destino</label>
                                    <select id="country">
                                        <option value="">Selecciona un país</option>
                                        <option value="colombia">Colombia</option>
                                        <option value="peru">Perú</option>
                                        <option value="ecuador">Ecuador</option>
                                        <option value="bolivia">Bolivia</option>
                                    </select>
                                </div>
                                <button className={`${styles['primary-btn']} ${styles['full-width']}`}>
                                    Calcular
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles['benefits-section']}>
                    <h2>¿Por qué elegir PrometeoRemitly?</h2>
                    <div className={styles['benefits']}>
                        <div className={styles['benefit-item']}>
                            <Shield className={`${styles['icon']} ${styles['benefit-icon']}`} />
                            <h3>Seguro y Confiable</h3>
                            <p>Utilizamos la última tecnología en seguridad para proteger tus transacciones.</p>
                        </div>
                        <div className={styles['benefit-item']}>
                            <DollarSign className={`${styles['icon']} ${styles['benefit-icon']}`} />
                            <h3>Tarifas Bajas</h3>
                            <p>Ofrecemos tarifas competitivas y transparentes para que envíes más dinero a casa.</p>
                        </div>
                        <div className={styles['benefit-item']}>
                            <Globe className={`${styles['icon']} ${styles['benefit-icon']}`} />
                            <h3>Cobertura Amplia</h3>
                            <p>Envía dinero a múltiples países en Sudamérica con facilidad y rapidez.</p>
                        </div>
                    </div>
                </section>

                {/* Nueva Sección: Países de Destino */}
                <section className={styles['destination-countries']}>
                    <h2 className={styles['section-title']}>Países de destino</h2>
                    <div className={styles['countries-container']}>
                        <div className={styles['country-card']}>Colombia</div>
                        <div className={styles['country-card']}>Perú</div>
                        <div className={styles['country-card']}>Ecuador</div>
                        <div className={styles['country-card']}>Argentina</div>
                        <div className={styles['country-card']}>Chile</div>
                        <div className={styles['country-card']}>Brasil</div>
                        <div className={styles['country-card']}>Venezuela</div>
                        <div className={styles['country-card']}>Uruguay</div>
                    </div>
                </section>

                {/* Nueva Sección: Testimonios */}
                <section className={styles['customer-reviews']}>
                    <h2>Descubre por qué millones de personas alrededor del mundo confían en PROMETEOREMITLY</h2>

                    {/* Testimonio 1 */}
                    <div className={styles['review-item']}>
                        <h4>Daniela Rodríguez</h4>
                        <p>"Estoy muy impresionada con esta aplicación. Las tasas de cambio son muy competitivas y el proceso es súper sencillo. Mi mamá en Colombia siempre recibe el dinero sin problemas, y la atención al cliente es excelente. ¡Recomendadísima!"</p>
                        <div className={styles['stars']}>★★★★★</div>
                    </div>

                    {/* Testimonio 2 */}
                    <div className={styles['review-item']}>
                        <h4>Carlos Rodríguez</h4>
                        <p>"La mejor forma de enviar dinero internacionalmente. Tarifas bajas y transacciones rápidas."</p>
                        <div className={styles['stars']}>★★★★★</div>
                    </div>

                    {/* Testimonio 3 */}
                    <div className={styles['review-item']}>
                        <h4>Fernando Lugo</h4>
                        <p>"¡Excelente aplicación! Enviar dinero a mi familia en Colombia nunca había sido tan fácil. La transferencia fue rápida y recibieron el dinero en su cuenta bancaria en cuestión de minutos. Definitivamente la mejor opción para enviar remesas."</p>
                        <div className={styles['stars']}>★★★★★</div>
                    </div>

                    {/* Testimonio 4 */}
                    <div className={styles['review-item']}>
                        <h4>Nelson Ramirez</h4>
                        <p>"He probado varias aplicaciones para enviar dinero a Colombia, pero esta es sin duda la mejor. El servicio es rápido, seguro y confiable. Además, puedo ver el tipo de cambio en tiempo real y siempre he tenido buenas experiencias con las transferencias."</p>
                        <div className={styles['stars']}>★★★★★</div>
                    </div> 
                </section>

            </main>

            <footer className={styles['footer']}>
                <div className={styles['footer-content']}>
                    <div className={styles['footer-section']}>
                        <h4>Acerca de Nosotros</h4>
                        <p>PROMETEOREMITLY es una plataforma confiable para enviar remesas.</p>
                    </div>
                    <div className={styles['footer-section']}>
                        <h4>Enlaces Rápidos</h4>
                        <ul>
                            <li><a href="/about">Sobre Nosotros</a></li>
                            <li><a href="/services">Servicios</a></li>
                        </ul>
                    </div>
                    <div className={styles['footer-section']}>
                        <h4>Contacto</h4>
                        <p>Teléfono: +1 234 567 890</p>
                        <p>Email: contacto@prometeo.com</p>
                    </div>
                </div>
                <div className={styles['footer-bottom']}>
                    <p>&copy; 2023 PROMETEO. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
}
