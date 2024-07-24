const Legal = () => (
    <main className="flex justify-center">
        <div className="flex flex-col gap-8 bg-neutral-800 rounded-md overflow-hidden w-10/12 p-5 m-10 max-w-5xl">
            <article>
                <h1 className="text-3xl font-medium">
                    Cookies & Privacy Policy
                </h1>
            </article>

            <article>
                <p className="font-bold">Last Updated: 24/07/2024</p>
            </article>
            <article>
                <section>
                    <h2 className="text-2xl font-medium">Important</h2>
                </section>
                <section>
                    <p>
                        By using this website, you agree to this policy and
                        acknowledge that you have read and understood it. Please
                        note that the landing page is the only secure page.
                        Beyond the landing page, data regarding your usage will
                        be saved, and cookies will be used.
                    </p>
                </section>
            </article>
            <article>
                <section>
                    <h2 className="text-2xl font-medium">Introduction</h2>
                </section>
                <section>
                    <p>
                        Welcome to Spotishare! We are committed to protecting
                        your privacy and ensuring that your personal information
                        is handled in a safe and responsible manner. This
                        Cookies & Privacy Policy explains how we collect, use,
                        and protect your information when you use our services.
                    </p>
                </section>
            </article>

            <article>
                <section>
                    <h2 className="text-2xl font-medium">Services Used</h2>
                </section>
                <section>
                    <p>Spotishare uses the following third-party services:</p>

                    <ul className="list-disc pl-6">
                        <li>MongoDB Atlas</li>
                        <li>Next.js</li>
                        <li>Spotify API</li>
                        <li>Resend</li>
                        <li>Google Icons</li>
                        <li>Google Fonts</li>
                        <li>Dafont</li>
                        <li>Vercel</li>
                        <li>GitHub</li>
                    </ul>

                    <p>
                        You can find the privacy policies of these respective
                        services on their official websites.
                    </p>
                </section>
            </article>

            <article>
                <section>
                    <h2 className="text-2xl font-medium">
                        Information We Collect
                    </h2>
                </section>

                <section className="flex flex-col gap-3">
                    <div>
                        <h3 className="text-xl font-medium">Cookies</h3>
                        <p>
                            To ensure the smooth functioning of Spotishare, we
                            need to store a cookie on your device. This cookie
                            contains a key used to authenticate you during your
                            session. No other data is stored on the client side.
                            All user data is securely stored in the Spotishare
                            database or fetched from the Spotify API.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium">Personal Data</h3>
                        <p>
                            Sensitive information such as your Spotify username
                            and Spotify email is stored in the Spotishare
                            database. Additionally, for security purposes, your
                            IP address may also be saved in our database. We do
                            not track user data beyond what is necessary for the
                            core functionality of the app.
                        </p>
                    </div>
                </section>
            </article>

            <article>
                <section>
                    <h2 className="text-2xl font-medium">
                        How We Use Your Information
                    </h2>
                </section>
                <section>
                    <ul className="list-disc pl-6">
                        <li>
                            <span className="font-bold">Authentication: </span>
                            The key stored in the cookie is used to authenticate
                            your session and provide access to the logged-in
                            areas of Spotishare.
                        </li>
                        <li>
                            <span className="font-bold">Data Storage: </span>
                            Your personal information, including Spotify
                            username, email, and IP address, is stored to
                            facilitate and secure your use of Spotishare.
                        </li>
                        <li>
                            <span className="font-bold">
                                Service Improvement:{" "}
                            </span>
                            We use data analytics to improve our services and
                            ensure a better user experience.
                        </li>
                    </ul>
                </section>
            </article>

            <article>
                <section>
                    <h2 className="text-2xl font-medium">
                        Third-Party Services
                    </h2>
                </section>
                <section>
                    <p>
                        We may share your information with third-party services
                        listed above solely for the purposes of enhancing
                        Spotishare&apos;s functionality and user experience.
                        These services are bound by their own privacy policies
                        regarding the handling of your personal information.
                    </p>
                </section>
            </article>

            <article>
                <section>
                    <h2 className="text-2xl font-medium">Data Security</h2>
                </section>
                <section>
                    <p>
                        We implement stringent security measures to protect your
                        personal data from unauthorized access, alteration, or
                        disclosure. Spotishare&apos;s code will be made
                        available on GitHub to ensure transparency and further
                        enhance user data privacy.
                    </p>
                </section>
            </article>

            <article>
                <section>
                    <h2 className="text-2xl font-medium">
                        Changes to This Policy
                    </h2>
                </section>
                <section>
                    <p>
                        Spotishare is continuously evolving, and our Cookies &
                        Privacy Policy may change accordingly. We will notify
                        you of any significant changes by updating the policy on
                        this page. We encourage you to review this policy
                        periodically to stay informed about how we are
                        protecting your information.
                    </p>
                </section>
            </article>

            <article>
                <section>
                    <h2 className="text-2xl font-medium">Your Rights</h2>
                </section>
                <section>
                    <p>
                        You have the right to access, update, or delete your
                        personal information stored with us. If you wish to
                        exercise these rights, please contact us using the
                        details provided below.
                    </p>
                </section>
            </article>

            <article>
                <section>
                    <h2 className="text-2xl font-medium">Contact Us</h2>
                </section>

                <section>
                    <p>
                        If you have any questions or concerns about this Cookies
                        & Privacy Policy, please contact us at
                        kevinservdb@gmail.com.
                    </p>
                    <p>
                        By using Spotishare, you agree to the terms of this
                        Cookies & Privacy Policy. Thank you for trusting us with
                        your personal information.
                    </p>
                </section>
            </article>
        </div>
    </main>
);

export default Legal;
