import LegalPage from '@/ui/components/LegalPage'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Shipping Policy | VelmoRx',
	description: 'VelmoRx Shipping Policy.',
}

export default function ShippingPolicyPage() {
	return (
		<LegalPage title='Shipping Policy'>
			<p>
				Thank you for visiting and shopping at VelmoRX. Following are the
				terms and conditions that constitute our Shipping Policy.
			</p>

			<h2>Domestic Shipping Policy</h2>

			<h3>Shipment processing time</h3>
			<p>All orders are processed within 2-3 business days.</p>
			<p>
				4-12 business days average shipping period (the shipping time may
				be affected if one of the ordered items is in very high demand or
				if any holidays are going on).
			</p>
			<p>Orders are not shipped or delivered on weekends or holidays.</p>
			<p>
				If we are experiencing a high volume of orders, shipments may be
				delayed by a few days. Please allow additional days in transit for
				delivery. If there will be a significant delay in the shipment of
				your order, we will contact you via email or telephone.
			</p>

			<h3>Shipping rates &amp; delivery estimates</h3>
			<p>Shipping charges for your order will be calculated and displayed at checkout.</p>

			<h3>Shipment confirmation &amp; Order tracking</h3>
			<p>
				You will receive a Shipment Confirmation email once your order has
				shipped containing your tracking number(s). The tracking number
				will be active within 24 hours.
			</p>

			<h3>Customs, Duties and Taxes</h3>
			<p>
				VelmoRX is not responsible for any customs and taxes applied to
				your order. All fees imposed during or after shipping are the
				responsibility of the customer (tariffs, taxes, etc.).
			</p>

			<h3>Damages</h3>
			<p>
				VelmoRX is not liable for any products damaged or lost during
				shipping. If you received your order damaged, please contact the
				shipment carrier to file a claim. Please save all packaging
				materials and damaged goods before filing a claim.
			</p>

			<h2>International Shipping Policy</h2>
			<p>We currently do not ship outside the U.S.</p>

			<h2>Returns Policy</h2>
			<p>
				Our <Link href='/refund'>Return &amp; Refund Policy</Link> provides
				detailed information about options and procedures for returning
				your order.
			</p>
		</LegalPage>
	)
}
