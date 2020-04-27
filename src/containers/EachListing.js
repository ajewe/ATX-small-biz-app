import { connect } from 'react-redux'
import EachListing from '../components/EachListing'

const mapStateToProps = (state) => {
  return {
    listings: state.listings
  }
}

export default connect(mapStateToProps)(EachListing)