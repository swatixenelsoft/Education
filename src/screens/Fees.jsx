import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles/Account.styles'
import Harsh from '../assets/images/Harsh-user.svg'
import ArrowBack from '../assets/icons/Arrow-back.svg'
import AccountBG from '../assets/images/Account-Bg.svg' 
import FeeBg from '../assets/images/Fee-Bg.svg'


const Fees = ({navigation}) => {
  return (
    <View>
 <AccountBG width={'100%'} style={{position:'absolute',top:0,left:0}}/>
    <View style={styles.profileImageContainer}>
        <Harsh/>
    <Text style={styles.profileName}>Harsh Kumar</Text>
        <View style={styles.IDcontainer}>
            <Text style={{color:'rgba(38, 136, 243, 1)'}}>ID: 3492203</Text>
        
        </View>

    </View>

    <TouchableOpacity onPress={()=>navigation.goBack()}>
    <View style={[styles.flexContainer,{marginTop:24,width:'90%',marginHorizontal:'auto'}]}>
    <ArrowBack/>
            <Text style={styles.headerContent}>Fees</Text>
            </View> 
            </TouchableOpacity>

            <View style={styles.feeContentContainer}>
                <View style={styles.feeContainer}>
                    <Text style={styles.feeText}>$89,000</Text>
                    <Text style={styles.feePText}>Total Fee</Text>
                </View>

                <View style={styles.feeContainer}>
                    <Text style={[styles.feeText,{color:'rgba(38, 136, 243, 1)'}]}>$89,000</Text>
                    <Text style={styles.feePText}>Paid Fee</Text>
                </View>

                <View style={[styles.feeContainer]}>
                    <Text style={[styles.feeText,{color:'rgba(255, 74, 85, 1)'}]}>$89,000</Text>
                    <Text style={styles.feePText}>Due Fee</Text>
                </View>

            </View>

            <View style={styles.feeDetailContainer}>
                <Text>Fee Details</Text>
                <View style={styles.flexSpaceBetween}>

                    <View style={{width:'50%'}}>
                        <View style={{position:'relative'}}>
                    <FeeBg width={'100%'} />
                    <View style={{position:'absolute',paddingHorizontal:17,paddingVertical:20}}>
                        <Text>Quarterly 01</Text>
                        <Text style={styles.monthContainer}>April,May,June</Text>
                        <Text style={{marginTop:10}}>$8,000</Text>
                        <View style={[styles.flexSpaceBetween,{marginTop:13}]}>
                            <View style={styles.paidContainer}>
                                <Text style={styles.whiteText}>Paid</Text>
                            </View>

                            <View style={styles.viewContainer}>
                                <Text style={styles.whiteText}>View</Text>
                            </View>

                        </View>
                    </View>
                    </View>
                    </View>

                    <View style={{width:'50%'}}>
                        <View style={{position:'relative'}}>
                    <FeeBg width={'100%'} />
                    <View style={{position:'absolute',paddingHorizontal:17,paddingVertical:20}}>
                        <Text>Quarterly 01</Text>
                        <Text style={styles.monthContainer}>April,May,June</Text>
                        <Text style={{marginTop:10}}>$8,000</Text>
                        <View style={[styles.flexSpaceBetween,{marginTop:13}]}>
                            <View style={styles.paidContainer}>
                                <Text style={styles.whiteText}>Paid</Text>
                            </View>

                            <View style={styles.viewContainer}>
                                <Text style={styles.whiteText}>View</Text>
                            </View>

                        </View>
                    </View>
                    </View>
                    </View>

                </View>
                <View style={styles.flexSpaceBetween}>

                    <View style={{width:'50%'}}>
                        <View style={{position:'relative'}}>
                    <FeeBg width={'100%'} />
                    <View style={{position:'absolute',paddingHorizontal:17,paddingVertical:20}}>
                        <Text>Quarterly 01</Text>
                        <Text style={styles.monthContainer}>April,May,June</Text>
                        <Text style={{marginTop:10}}>$8,000</Text>
                        <View style={[styles.flexSpaceBetween,{marginTop:13}]}>
                            <View style={styles.paidContainer}>
                                <Text style={styles.whiteText}>Paid</Text>
                            </View>

                            <View style={styles.viewContainer}>
                                <Text style={styles.whiteText}>View</Text>
                            </View>

                        </View>
                    </View>
                    </View>
                    </View>

                    <View style={{width:'50%'}}>
                        <View style={{position:'relative'}}>
                    <FeeBg width={'100%'} />
                    <View style={{position:'absolute',paddingHorizontal:17,paddingVertical:20}}>
                        <Text>Quarterly 01</Text>
                        <Text style={styles.monthContainer}>April,May,June</Text>
                        <Text style={{marginTop:10}}>$8,000</Text>
                        <View style={[styles.flexSpaceBetween,{marginTop:13}]}>
                            <View style={styles.paidContainer}>
                                <Text style={styles.whiteText}>Paid</Text>
                            </View>

                            <View style={styles.viewContainer}>
                                <Text style={styles.whiteText}>View</Text>
                            </View>

                        </View>
                    </View>
                    </View>
                    </View>

                </View>

            </View>
    </View>
  )
}

export default Fees