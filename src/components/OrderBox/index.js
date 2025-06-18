import { Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import styles from './styles'
import ButtonBox from '../ButtonBox'
import Bold from '../Bold'
import Address from '../Address'
import CustomerSemiBox from '../CustomerSemiBox'

const payment = (status) => {
  switch (status) {
    case 'unpaid':
      return 'Não pago'
    case 'pending_confirmation':
      return 'À confirmar'
    case 'paid':
      return 'Pago'
    case 'pending':
      return 'Pendente'
    case 'Authorized':
      return 'Autorizado, não recebido'
    case 'voided':
      return 'Cancelado'
    case 'refunded':
      return 'Reembolsado'
    case 'abandoned':
      return 'Abandonado'
    default:
      return 'Erro'
  }
}

const shipping = (status) => {
  switch (status) {
    case 'unpacked':
      return 'Separando itens'
    case 'shipped':
      return 'Enviado'
    default:
      return 'Entregue'
  }
}

export default (props) => {
  const order = props.order

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        id: <Bold>{order.id}</Bold>
      </Text>
      <Text style={styles.text}>
        Consumidor:
      </Text>
      <CustomerSemiBox customer={order.customer
        ? order.customer
        : { name: order.contact_name, email: order.contact_email }
      } />
      <Text style={styles.text}>
        Endereço de entrega:
      </Text>
      <Address address={order.shipping_address} />
      <Text style={styles.text}>
        Total: <Bold>{order.products.reduce((s,p)=>s+parseFloat(p.price), 0).toFixed(2)} {order.currency}</Bold>
      </Text>
      <Text style={styles.text}>
        Pagamento: <Bold>{payment(order.payment_status)}</Bold>
      </Text>
      <Text style={styles.text}>
        Entrega: <Bold>{shipping(order.shipping_status)}</Bold>
      </Text>
      <ButtonBox
        remove={props.remove}
        edit={props.edit}
      />
    </View>
  )
}
