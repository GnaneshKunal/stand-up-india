import * as React from 'react';

export default class Services extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <section id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Services</h2>
                            <h3 className="section-subheading text-muted">Stand-Up India Scheme for financing SC/ST and/or Women Entrepreneurs.</h3>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                <i className="fa fa-bank fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="service-heading">How to Start your Business</h4>
                            <p className="text-muted">Starting a business is a multi-step process that can feel overwhelming when you're on your own, but we'll make it easy to stay organized and on track while you start your business and achieve success. Whether you're refining your business idea, filing for permits and licenses, drafting your business plan, or looking for funding, we have the tools you need to do it right and get it done. If you're ready to start your business but need a helping hand, why not take  our support for your challenge?</p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                <i className="fa fa-bar-chart fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="service-heading">How to run your Business</h4>
                            <p className="text-muted">You're up and building and looking for opportunities to grow your business—and your revenue. Strong business management is your key to success. And the two best things you can do to manage your business successfully are to make sure you understand your financials and to develop marketing strategies that are based on real data and customer feedback. If you have any questions, you can turn to one of our expert how-to guides for answers.</p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                <i className="fa fa-money fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="service-heading">How to grow your Business</h4>
                            <p className="text-muted"> What makes a business grow? Is it planning,

				maybe? Or focusing on the critical elements, the

				most profitable lines of business, and the best

				customers? Or is it expanding into new areas?

				It’s hard to generalize. Sometimes the best and

				healthiest growth is achieved by selling more of

				the same to the same people, more dollars per

				customer. Sometimes the best growth comes

				from lighting out into new areas, new markets,

				and new business offerings. It all depends on the

				specifics of your organization, your strategy, and

				your resources. There are also a lot of clichés, so

				much we take for granted, and way too many false

				myths. You have to do it your way. Every company,

				every situation, is different.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
