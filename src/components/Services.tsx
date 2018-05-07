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
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <span className="fa-stack fa-4x">
                                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                <i className="fa fa-bank fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="section-heading">Core Objective</h4>
                            <p className="text-muted">The objective of the Stand-Up India scheme is to facilitate bank loans between  RS.10 lakh and RS. 1 Crore to at least one Scheduled Caste (SC) or Scheduled Tribe (ST) borrower and at least one woman borrower per bank branch for setting up a greenfield enterprise. This enterprise may be in manufacturing, services or the trading sector. In case of non-individual enterprises at least 51% of the shareholding and controlling stake should be held by either an SC/ST or Woman entrepreneur.</p>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-3">
                            <span className="fa-stack fa-4x">
                                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                <i className="fa fa-bar-chart fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="service-heading">Eligibility</h4>
                            <p className="text-muted">SC/ST and/or woman entrepreneurs, above 18 years of age. Loans under the scheme is available for only green field project. Green field signifies, in this context, the first time venture of the beneficiary in the manufacturing or services or trading sector. In case of non-individual enterprises, 51% of the shareholding and controlling stake should be held by either SC/ST and/or Women Entrepreneur.Borrower should not be in default to any bank/financial institution.</p>
                        </div>
                        <div className="col-md-3">
                            <span className="fa-stack fa-4x">
                                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                <i className="fa fa-money fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="service-heading">Loan</h4>
                            <p className="text-muted">Composite loan (inclusive of term loan and working capital) between Rs.10 lakh and upto Rs.100 lakh. For setting up a new enterprise in manufacturing, trading or services sector by SC/ST/Women entrepreneur. Composite loan of 75% of the project cost inclusive of term loan and working capital. The stipulation of the loan being expected to cover 75% of the project cost would not apply if the borrower’s contribution along with convergence support from any other schemes exceeds 25% of the project cost.</p>
                        </div>
                        <div className="col-md-3">
                            <span className="fa-stack fa-4x">
                                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                <i className="fa fa-briefcase fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="service-heading">Repayment & Working Capital</h4>
                            <p className="text-muted">The loan is repayable in 7 years with a maximum moratorium period of 18 months. For drawal of Working capital upto Rs. 10 lakh, the same may be sanctioned by way of overdraft. Rupay debit card to be issued for convenience of the borrower. Working capital limit above Rs. 10 lakh to be sanctioned by way of Cash Credit limit.</p>
                        </div>

                        <div className="col-md-3">
                            <span className="fa-stack fa-4x">
                                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                <i className="fa fa-pie-chart fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="service-heading">Margin Money</h4>
                            <p className="text-muted">The Scheme envisages 25% margin money which can be provided in convergence with eligible   Central / State schemes. While such schemes can be drawn upon for availing admissible subsidies or for meeting margin money requirements, in all cases, the borrower shall be required to bring in minimum of 10% of the project cost as own contribution..</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
