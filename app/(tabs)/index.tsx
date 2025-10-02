import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Plus, Search, Eye, Star, Bell, Smartphone, Wallet, Gift, FolderOpen } from 'lucide-react-native';

export default function PayScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.profilePic}>
            <View style={styles.profilePlaceholder} />
          </TouchableOpacity>

          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.iconButton}>
              <Plus size={24} color="#ffffff" />
            </TouchableOpacity>

            <View style={styles.emojiGroup}>
              <Text style={styles.emoji}>😀</Text>
              <Text style={styles.emoji}>😀</Text>
              <Text style={styles.emoji}>😀</Text>
            </View>

            <TouchableOpacity style={styles.iconButton}>
              <Eye size={24} color="#ffffff" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconButton}>
              <Star size={24} color="#ffffff" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconButton}>
              <Bell size={24} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.scanCard}>
          <LinearGradient
            colors={['#6b4c8c', '#4a3766']}
            style={styles.scanGradient}
          >
            <View style={styles.scanFrame}>
              <View style={styles.scanLine} />
              <View style={styles.scanLine} />
              <View style={styles.scanLine} />
              <View style={styles.scanLine} />
            </View>
            <View style={styles.scanBadge}>
              <Text style={styles.scanBadgeText}>Scan & Pay</Text>
            </View>
          </LinearGradient>
        </View>

        <View style={styles.searchContainer}>
          <Search size={24} color="#999999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Pay UPI ID or number"
            placeholderTextColor="#666666"
          />
        </View>

        <View style={styles.kycBanner}>
          <LinearGradient
            colors={['#1a3a2e', '#0f2419']}
            style={styles.kycGradient}
          >
            <View style={styles.kycContent}>
              <View style={styles.kycText}>
                <Text style={styles.kycTitle}>Unlock higher security</Text>
                <Text style={styles.kycSubtitle}>by completing RBI preferred</Text>
                <Text style={styles.kycSubtitle}>video KYC</Text>
                <TouchableOpacity>
                  <Text style={styles.verifyButton}>Verify now {'>'}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.kycBadge}>
                <Text style={styles.kycBadgeText}>🔒</Text>
                <Text style={styles.kycRibbon}>secure your account</Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuresScroll}>
          <TouchableOpacity style={styles.featureCard}>
            <View style={styles.featureIconContainer}>
              <Smartphone size={32} color="#ffd700" />
            </View>
            <Text style={styles.featureTitle}>Recharge</Text>
            <Text style={styles.featureSubtitle}>💰 1x coins</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.featureCard}>
            <View style={styles.featureIconContainer}>
              <View style={styles.playIcon}>
                <Text style={styles.playIconText}>▶</Text>
              </View>
            </View>
            <Text style={styles.featureTitle}>Google Play</Text>
            <Text style={styles.featureSubtitle}>₹500 back*</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.featureCard}>
            <View style={styles.featureIconContainer}>
              <Gift size={32} color="#e91e63" />
            </View>
            <Text style={styles.featureTitle}>Cashbacks</Text>
            <Text style={styles.featureSubtitle}>₹500 back*</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.featureCard}>
            <View style={styles.featureIconContainer}>
              <FolderOpen size={32} color="#ff9800" />
            </View>
            <Text style={styles.featureTitle}>Keeper</Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.upiBanner}>
          <LinearGradient
            colors={['#4a1a3a', '#2d0f23']}
            style={styles.upiGradient}
          >
            <View style={styles.upiContent}>
              <Text style={styles.upiTitle}>Link & pay using</Text>
              <Text style={styles.upiTitle}>your bank account</Text>
              <TouchableOpacity>
                <Text style={styles.linkButton}>Link now {'>'}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.upiLogo}>
              <Text style={styles.upiLogoText}>UPI</Text>
              <Text style={styles.upiVersion}>2.0</Text>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  profilePic: {
    width: 56,
    height: 56,
    borderRadius: 28,
    overflow: 'hidden',
  },
  profilePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#4a90e2',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#2a2a2a',
    borderRadius: 30,
    paddingHorizontal: 6,
    paddingVertical: 6,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#3a3a3a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emojiGroup: {
    flexDirection: 'row',
    gap: -6,
    paddingHorizontal: 4,
  },
  emoji: {
    fontSize: 26,
  },
  scanCard: {
    marginHorizontal: 16,
    marginTop: 24,
    height: 180,
    borderRadius: 16,
    overflow: 'hidden',
  },
  scanGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  scanFrame: {
    width: '80%',
    height: 120,
    position: 'relative',
  },
  scanLine: {
    height: 8,
    backgroundColor: '#ff9800',
    marginVertical: 6,
    borderRadius: 4,
  },
  scanBadge: {
    position: 'absolute',
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
  },
  scanBadgeText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 24,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ff9800',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    color: '#ffffff',
    fontSize: 16,
  },
  kycBanner: {
    marginHorizontal: 16,
    marginTop: 24,
    borderRadius: 16,
    overflow: 'hidden',
  },
  kycGradient: {
    padding: 20,
  },
  kycContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  kycText: {
    flex: 1,
  },
  kycTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  kycSubtitle: {
    color: '#a0a0a0',
    fontSize: 14,
    marginBottom: 2,
  },
  verifyButton: {
    color: '#ff9800',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
  },
  kycBadge: {
    alignItems: 'center',
    backgroundColor: '#2a6b4a',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
  },
  kycBadgeText: {
    fontSize: 32,
  },
  kycRibbon: {
    color: '#ffd700',
    fontSize: 10,
    marginTop: 4,
    fontWeight: '600',
  },
  featuresScroll: {
    marginTop: 24,
    paddingLeft: 16,
  },
  featureCard: {
    width: 140,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    alignItems: 'center',
  },
  featureIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#2a2a2a',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  playIcon: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#4285f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playIconText: {
    color: '#ffffff',
    fontSize: 20,
  },
  featureTitle: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  featureSubtitle: {
    color: '#ff9800',
    fontSize: 12,
    fontWeight: '500',
  },
  upiBanner: {
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 24,
    borderRadius: 16,
    overflow: 'hidden',
  },
  upiGradient: {
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  upiContent: {
    flex: 1,
  },
  upiTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 2,
  },
  linkButton: {
    color: '#ff9800',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
  },
  upiLogo: {
    alignItems: 'center',
  },
  upiLogoText: {
    color: '#ffd700',
    fontSize: 48,
    fontWeight: '800',
    letterSpacing: 2,
  },
  upiVersion: {
    color: '#ffd700',
    fontSize: 24,
    fontWeight: '800',
  },
});
